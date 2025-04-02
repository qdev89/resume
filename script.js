document.addEventListener('DOMContentLoaded', function() {
    // Set profile placeholder initial if no image is provided
    const profilePlaceholder = document.querySelector('.profile-placeholder');
    if (profilePlaceholder) {
        profilePlaceholder.innerHTML = 'QN'; // Your initials
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to skill pills on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-pill').forEach(pill => {
        observer.observe(pill);
    });

    // Track page visit with simple analytics (you can replace this with a proper analytics solution)
    console.log('Page visited at:', new Date().toLocaleString());
});

// Add a class for highlighting skills when they're viewed
document.addEventListener('scroll', function() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            document.querySelectorAll('.skill-pill').forEach((pill, index) => {
                setTimeout(() => {
                    pill.classList.add('visible');
                }, index * 50);
            });
        }
    }
});

// Add animation class to elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .experience-item, .education-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
// Trigger once on initial load
animateOnScroll();
