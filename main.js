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

    // 4. Carousel Marquee & Dots Sync
    const carouselContaier = document.querySelector('.quest-cards-container');
    const track = document.createElement('div');
    track.className = 'quest-track';
    
    if (carouselContaier) {
        const cards = Array.from(carouselContaier.children).filter(c => c.classList.contains('quest-card'));
        
        // Wrap cards in a track
        carouselContaier.innerHTML = '';
        carouselContaier.appendChild(track);
        
        cards.forEach(card => track.appendChild(card));
        
        // Clone cards for infinite loop
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });

        // Optional: Sync Dots if they exist
        const dots = document.querySelectorAll('.dot');
        if (dots.length > 0) {
            carouselContaier.addEventListener('scroll', () => {
                const scrollPercent = carouselContaier.scrollLeft / (carouselContaier.scrollWidth / 2);
                const activeIndex = Math.min(
                    Math.floor(scrollPercent * dots.length),
                    dots.length - 1
                );
                
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === activeIndex);
                });
            });
        }
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
