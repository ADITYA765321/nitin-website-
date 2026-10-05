/**
 * BCA Semester I Web Development Project
 * Main JavaScript (Theme switch, Mobile nav, Modals, Animations)
 * Authors: Sumit Kumar & Nitin Raj
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initActiveNavLink();
  initSkillBarAnimations();
  initAnimatedCounters();
  initStudentModals();
});

/**
 * 1. Dark / Light Theme Toggle with LocalStorage
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  // Check saved preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === 'dark' 
      ? '<i class="fas fa-sun" title="Switch to Light Mode"></i>' 
      : '<i class="fas fa-moon" title="Switch to Dark Mode"></i>';
    themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }
}

/**
 * 2. Mobile Hamburger Navigation
 */
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');

  if (!mobileToggle || !mainNav) return;

  mobileToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('active');
    mobileToggle.innerHTML = isOpen 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
    mobileToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav on link click in mobile view
  const navLinks = mainNav.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/**
 * 3. Highlight Current Page in Navigation
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * 4. Animated Skill Bars on Scroll
 */
function initSkillBarAnimations() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  if (!skillBars.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-level') || '80%';
        bar.style.width = targetWidth;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });

  skillBars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

/**
 * 5. Animated Number Counters
 */
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.stat-number');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        const suffix = el.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = Math.max(1, Math.floor(target / 40));

        const updateCount = () => {
          count += speed;
          if (count < target) {
            el.textContent = count + suffix;
            requestAnimationFrame(updateCount);
          } else {
            el.textContent = target + suffix;
          }
        };

        updateCount();
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
}

/**
 * 6. Quick View Student Modal Handler
 */
function initStudentModals() {
  const modal = document.getElementById('studentModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const triggerBtns = document.querySelectorAll('[data-open-modal]');

  if (!modal) return;

  const studentData = {
    sumit: {
      name: "Sumit Kumar",
      role: "Frontend & Web Tech Enthusiast",
      course: "BCA Semester I - Parul University",
      bio: "Dedicated first-year BCA student with a deep passion for web technologies, responsive interface design, and clean modular code. Driven to build impactful web applications and master computer science fundamentals.",
      skills: ["HTML5", "CSS3 / Flexbox", "C Programming", "Responsive UI", "Git & GitHub"],
      link: "sumit.html",
      avatar: "assets/images/sumit-avatar.svg"
    },
    nitin: {
      name: "Nitin Raj",
      role: "Algorithms & Logic Developer",
      course: "BCA Semester I - Parul University (Roll: 26UG100364)",
      bio: "Enthusiastic computer applications undergraduate focused on C programming, algorithmic logic, computer systems, and modern web development. Passionate about problem solving and software architecture.",
      skills: ["C Programming", "Data Structures Basics", "HTML5 & CSS3", "Logic Building", "Linux CLI"],
      link: "nitin.html",
      avatar: "assets/images/nitin-avatar.svg"
    }
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const studentKey = btn.getAttribute('data-open-modal');
      const data = studentData[studentKey];
      if (!data) return;

      document.getElementById('modalAvatar').src = data.avatar;
      document.getElementById('modalName').textContent = data.name;
      document.getElementById('modalRole').textContent = data.role;
      document.getElementById('modalCourse').textContent = data.course;
      document.getElementById('modalBio').textContent = data.bio;
      
      const skillsContainer = document.getElementById('modalSkills');
      skillsContainer.innerHTML = data.skills.map(s => `<span class="badge badge-primary">${s}</span>`).join(' ');

      const modalProfileLink = document.getElementById('modalProfileLink');
      modalProfileLink.href = data.link;

      modal.classList.add('active');
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}
