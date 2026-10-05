/**
 * BCA Semester I Web Development Project
 * Contact & Feedback Validation Script
 * Authors: Sumit Kumar & Nitin Raj
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initRatingSystem();
  initFaqAccordion();
});

/**
 * 1. Form Validation & Submission
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const recipientInput = document.getElementById('recipientSelect');
  const subjectInput = document.getElementById('subjectInput');
  const messageInput = document.getElementById('messageInput');

  // Check URL parameters for recipient pre-selection
  const urlParams = new URLSearchParams(window.location.search);
  const recipientParam = urlParams.get('recipient');
  if (recipientParam && recipientInput) {
    if (recipientParam === 'sumit' || recipientParam === 'nitin' || recipientParam === 'both') {
      recipientInput.value = recipientParam;
    }
  }

  // Real-time validation listeners
  nameInput.addEventListener('input', () => validateName(nameInput));
  emailInput.addEventListener('input', () => validateEmail(emailInput));
  recipientInput.addEventListener('change', () => validateSelect(recipientInput));
  subjectInput.addEventListener('input', () => validateRequired(subjectInput, 3));
  messageInput.addEventListener('input', () => validateRequired(messageInput, 10));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName(nameInput);
    const isEmailValid = validateEmail(emailInput);
    const isRecipientValid = validateSelect(recipientInput);
    const isSubjectValid = validateRequired(subjectInput, 3);
    const isMessageValid = validateRequired(messageInput, 10);

    if (isNameValid && isEmailValid && isRecipientValid && isSubjectValid && isMessageValid) {
      // Simulate successful submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast(`Thank you, ${nameInput.value}! Your message has been sent successfully.`);
        form.reset();
        clearValidationClasses(form);
        resetRating();
      }, 1000);
    } else {
      showToast('Please correct the highlighted errors before submitting.', 'error');
    }
  });
}

function validateName(input) {
  const value = input.value.trim();
  const isValid = value.length >= 3 && /^[a-zA-Z\s]+$/.test(value);
  setValidationStatus(input, isValid);
  return isValid;
}

function validateEmail(input) {
  const value = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(value);
  setValidationStatus(input, isValid);
  return isValid;
}

function validateSelect(input) {
  const isValid = input.value !== "" && input.value !== null;
  setValidationStatus(input, isValid);
  return isValid;
}

function validateRequired(input, minLen = 1) {
  const isValid = input.value.trim().length >= minLen;
  setValidationStatus(input, isValid);
  return isValid;
}

function setValidationStatus(input, isValid) {
  if (isValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
}

function clearValidationClasses(form) {
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.classList.remove('is-valid', 'is-invalid');
  });
}

/**
 * 2. Interactive Star Rating System
 */
let currentRating = 5;

function initRatingSystem() {
  const stars = document.querySelectorAll('.rating-star');
  if (!stars.length) return;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      currentRating = parseInt(star.getAttribute('data-value'), 10);
      updateStars(currentRating);
    });

    star.addEventListener('mouseover', () => {
      const hoverVal = parseInt(star.getAttribute('data-value'), 10);
      highlightStars(hoverVal);
    });

    star.addEventListener('mouseout', () => {
      updateStars(currentRating);
    });
  });

  updateStars(currentRating);
}

function highlightStars(val) {
  const stars = document.querySelectorAll('.rating-star');
  stars.forEach(star => {
    const starVal = parseInt(star.getAttribute('data-value'), 10);
    if (starVal <= val) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

function updateStars(val) {
  highlightStars(val);
  const ratingText = document.getElementById('ratingValueText');
  if (ratingText) {
    ratingText.textContent = `${val} / 5 Stars`;
  }
}

function resetRating() {
  currentRating = 5;
  updateStars(currentRating);
}

/**
 * 3. FAQ Accordion
 */
function initFaqAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 4. Toast Notification Popup
 */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (type === 'error') {
    toast.style.borderLeftColor = 'var(--danger)';
  }

  const icon = type === 'error' ? 'fa-exclamation-circle text-danger' : 'fa-check-circle text-success';
  toast.innerHTML = `
    <i class="fas ${icon}" style="font-size: 1.2rem; color: ${type === 'error' ? 'var(--danger)' : 'var(--success)'};"></i>
    <div style="flex: 1; font-size: 0.92rem; font-weight: 500;">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
