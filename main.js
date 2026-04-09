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

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            mobileMenuBtn.innerText = navLinksContainer.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn.innerText = '☰';
            });
        });
    }

    // 4. Carousel Dots Sync
    const carousel = document.getElementById('quest-carousel');
    const dots = document.querySelectorAll('.dot');

    if (carousel && dots.length > 0) {
        carousel.addEventListener('scroll', () => {
            const scrollPercent = carousel.scrollLeft / (carousel.scrollWidth - carousel.clientWidth);
            const activeIndex = Math.min(
                Math.floor(scrollPercent * dots.length),
                dots.length - 1
            );
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeIndex);
            });
        });
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
    // Use target from event directly
    if (event && event.target) {
        event.target.classList.add('active');
    }
}
