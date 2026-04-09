document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id], header[id]');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 1. Handle Active State by Page
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Remove existing active classes
        link.classList.remove('active');

        // Check if link matches current page
        if (href === currentPage && !href.includes('#')) {
            link.classList.add('active');
        }
    });

    // 2. Handle Scroll Spy for Homepage
    if (currentPage === 'index.html' || currentPage === '') {
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -80% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Clear ALL active classes first
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Add active to the current section's link
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${id}` || href === `index.html#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
});

function showSection(role) {
    // Hide all sections
    document.querySelectorAll('.role-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected section
    document.getElementById(role).classList.add('active');
    
    // Update button states
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}
