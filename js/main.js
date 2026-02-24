/* =============================================
   UPDATE EVENT DATE HERE
   ============================================= */
const EVENT_DATE = new Date('2025-12-31T09:00:00');

/* =============================================
   NAVBAR SCROLL EFFECT
   ============================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* =============================================
   MOBILE HAMBURGER MENU TOGGLE
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* =============================================
   COUNTDOWN TIMER
   ============================================= */
function updateCountdown() {
    const now = new Date().getTime();
    const distance = EVENT_DATE.getTime() - now;

    // If countdown has finished, hide the countdown
    if (distance < 0) {
        document.getElementById('countdown').style.display = 'none';
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

/* =============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 150; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* =============================================
   INTERSECTION OBSERVER - FADE IN ANIMATION
   ============================================= */
const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of element is visible
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

/* =============================================
   CHECKBOX PILL STYLING
   ============================================= */
const checkboxPills = document.querySelectorAll('.checkbox-pill');

checkboxPills.forEach(pill => {
    const checkbox = pill.querySelector('input[type="checkbox"]');
    
    pill.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
        
        if (checkbox.checked) {
            pill.classList.add('checked');
        } else {
            pill.classList.remove('checked');
        }
    });
});

/* =============================================
   NETLIFY FORM SUCCESS HANDLING
   ============================================= */
// Check if URL contains success parameter
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
    document.querySelector('.registration-form').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
}

// Alternative: Handle form submission with fetch for inline success message
const form = document.querySelector('.registration-form');
if (form) {
    form.addEventListener('submit', async (e) => {
        // Let Netlify handle the form submission normally
        // This is just for potential future enhancements
        // The default action will still work
    });
}

/* =============================================
   CONSOLE LOG - READY MESSAGE
   ============================================= */
console.log('🎯 Dads vs. Mano Suave website loaded successfully!');
console.log('📅 Event Date:', EVENT_DATE.toLocaleDateString());
