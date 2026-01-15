// ===================================
// Banner Image Protection
// ===================================
const bannerImage = document.querySelector('.banner-image');
if (bannerImage) {
    bannerImage.addEventListener('contextmenu', (e) => e.preventDefault());
    bannerImage.addEventListener('dragstart', (e) => e.preventDefault());
}

// ===================================
// Smooth Scroll Navigation
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navMenu = document.getElementById('navMenu');
            const navToggle = document.getElementById('navToggle');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ===================================
// Scroll Animations with Intersection Observer
// ===================================
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optionally unobserve after animation
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => observer.observe(element));
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous messages
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        clearErrors();

        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Validate form
        let isValid = true;

        if (formData.name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        }

        if (formData.email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        if (formData.message === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoader = submitBtn.querySelector('.btn-loader');

        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';

        // Simulate form submission (replace with actual form service)
        // For Web3Forms or Formspree, you would send the data to their API
        try {
            // Example: Using Web3Forms
            // Replace 'YOUR_ACCESS_KEY_HERE' with actual access key from https://web3forms.com

            /* Uncomment and configure this section when ready to use Web3Forms:

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'YOUR_ACCESS_KEY_HERE',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: 'New Contact Form Submission from Personal Website'
                })
            });

            const result = await response.json();

            if (result.success) {
                showSuccess('Thank you for your message! I\'ll get back to you soon.');
                contactForm.reset();
            } else {
                showErrorMessage('Something went wrong. Please try again or reach out via LinkedIn.');
            }
            */

            // Temporary simulation (remove when integrating real form service)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show informational message since form service isn't configured yet
            formMessage.className = 'form-message success';
            formMessage.textContent = 'Form ready! To receive submissions, configure Web3Forms or Formspree by following the instructions in the JavaScript file (js/main.js).';
            contactForm.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            showErrorMessage('An error occurred. Please try again or contact me via LinkedIn.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });
}

// Form validation helpers
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function showSuccess(message) {
    formMessage.className = 'form-message success';
    formMessage.textContent = message;
}

function showErrorMessage(message) {
    formMessage.className = 'form-message error';
    formMessage.textContent = message;
}

// Real-time email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const email = emailInput.value.trim();
        const emailError = document.getElementById('emailError');

        if (email !== '' && !isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
        } else {
            emailError.textContent = '';
        }
    });
}

// ===================================
// Dynamic Year in Footer
// ===================================
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// ===================================
// Preload Optimization
// ===================================
window.addEventListener('load', () => {
    // Mark initial viewport elements as visible
    const initialElements = document.querySelectorAll('.hero .fade-in');
    initialElements.forEach(element => {
        element.classList.add('visible');
    });
});

// ===================================
// Keyboard Navigation Enhancement
// ===================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ===================================
// Performance: Debounce Scroll Events
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers for better performance
const debouncedUpdateActiveNav = debounce(updateActiveNav, 100);
window.removeEventListener('scroll', updateActiveNav);
window.addEventListener('scroll', debouncedUpdateActiveNav);

// ===================================
// Console Message (Optional)
// ===================================
console.log('%c👋 Welcome to my portfolio!', 'font-size: 16px; font-weight: bold; color: #2563eb;');
console.log('%cInterested in the code? Check out the repository or get in touch!', 'font-size: 12px; color: #6b7280;');
