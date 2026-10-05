# Design, Development and Live Deployment of a Student Profile Website

> **Academic Project for BCA Semester I**  
> **Course:** Bachelor of Computer Applications (BCA) — Semester I  
> **Subject:** Fundamentals of Web Development Practical  
> **Faculty:** Faculty of IT & Computer Science, Parul University, Vadodara  

---

## 👥 Student Profiles

| Student | Name | Enrollment / Roll | Role / Focus | Page |
| :--- | :--- | :--- | :--- | :--- |
| **Student 1** | **Sumit Kumar** | BCA Sem I | Frontend & UI/UX Development | [Sumit's Profile](sumit.html) |
| **Student 2** | **Nitin Raj** | `26UG100364` | Algorithms, C Programming & Logic | [Nitin's Profile](nitin.html) |

---

## 🌟 Project Overview

This website was engineered as a comprehensive tiny project demonstrating all practical learning outcomes of the **Fundamentals of Web Development** syllabus:

1. **Semantic HTML5 Markup**: Standardized usage of semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) to promote accessibility, clear document outline, and SEO.
2. **Modern CSS3 Design System**:
   - CSS Variables (Custom Properties) powering a seamless **Light & Dark Theme Toggle**.
   - Fully responsive grid and flexbox architecture accommodating mobile devices (320px+), tablets, laptops, and ultra-wide screens.
   - Elegant glassmorphism, gradient accents, modern typography (Google Fonts *Outfit* & *Plus Jakarta Sans*), and smooth micro-interactions.
3. **Vanilla JavaScript (ES6+)**:
   - Persistent theme switching saved in `localStorage`.
   - Responsive mobile navigation hamburger menu.
   - Interactive Quick View modal popups.
   - Animated skill progress bars and stats counters with `IntersectionObserver`.
   - Real-time client-side form validation (email regex, field length criteria) with star rating feedback and animated toast popups.
4. **Live Cloud Deployment**:
   - Ready for zero-cost deployment on **GitHub Pages**, **Netlify**, or **Vercel** with pure relative paths.

---

## 📂 Project Architecture

```
web development project/
├── index.html              # Homepage with hero section, student cards, academic highlights
├── sumit.html              # Comprehensive profile of Sumit Kumar
├── nitin.html              # Comprehensive profile of Nitin Raj
├── project.html            # Academic documentation, architecture & live deployment guide
├── contact.html            # Interactive contact/feedback form with live JS validation & FAQ
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet (Design tokens, Dark mode, Media queries)
│   ├── js/
│   │   ├── main.js         # Theme toggle, mobile menu, modals, scroll animations
│   │   └── contact.js      # Form validation, star rating, toast messages, FAQ accordion
│   └── images/
│       ├── logo.svg        # Scalable Vector Graphics brand logo
│       ├── sumit-avatar.svg# Modern vector portrait avatar for Sumit Kumar
│       └── nitin-avatar.svg# Modern vector portrait avatar for Nitin Raj
└── README.md               # Project documentation & Viva Voce guide
```

---

## 🚀 How to Run the Website Locally

### Option 1: Direct Browser Open
Simply double-click `index.html` in your file explorer to open the website directly in any modern browser (Google Chrome, Microsoft Edge, Firefox, Brave).

### Option 2: Using Python HTTP Server (Recommended)
Open PowerShell or Command Prompt in this folder and run:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Option 3: VS Code Live Server
Open the project directory in VS Code, right-click `index.html`, and select **"Open with Live Server"**.

---

## 🌐 Live Deployment Guide (GitHub Pages)

Fulfilling the **“Live Deployment”** requirement of the project title:

1. **Initialize Git and Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Student Profile Website"
   ```
2. **Push to GitHub**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/student-profile-website.git
   git push -u origin main
   ```
3. **Turn On GitHub Pages**:
   - Go to your repository on GitHub &rarr; **Settings** &rarr; **Pages**.
   - Under **Build and deployment > Branch**, choose `main` branch and `/ (root)`.
   - Click **Save**.
4. **Live URL**:
   Your website will be live in 1–2 minutes at:
   `https://<your-username>.github.io/student-profile-website/`

---

## 🎓 Viva Voce Preparation & Key Concepts

| Question | Examiner Focus | Model Answer |
| :--- | :--- | :--- |
| **Why use HTML5 semantic tags?** | Code Quality & Accessibility | Semantic tags like `<article>`, `<section>`, and `<nav>` provide structural meaning to search engines and screen readers rather than non-descriptive generic `<div>` tags. |
| **How does the Dark/Light Mode toggle work?** | CSS Variables & DOM | Custom CSS variables are toggled by switching the `data-theme` attribute on `<html>` using JavaScript, and the state is stored in `localStorage`. |
| **What makes the website responsive?** | CSS Media Queries | Flexible CSS Grid, Flexbox, fluid units (`clamp()`, `%`, `rem`), and media queries at `1024px`, `768px`, and `480px`. |
| **How was form validation implemented?** | Client-Side JS | Regular expressions check email validity and character count triggers dynamic `.is-valid` or `.is-invalid` classes. |

---

## 📜 Academic Declaration

We hereby declare that this project titled **“Design, Development and Live Deployment of a Student Profile Website”** was designed and implemented by **Sumit Kumar** and **Nitin Raj** as part of the academic coursework for **BCA Semester I** under the **Faculty of IT & Computer Science, Parul University, Vadodara**.
