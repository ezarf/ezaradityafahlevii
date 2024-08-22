// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Parallax Effect for Hero Slide and Header
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.hero-slide');
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;

    if (parallax) {
        parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }

    if (scrollPosition > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

// Animate Elements on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    const offset = 100;

    elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        if (elementPosition < windowHeight - offset) {
            el.classList.add('animate__animated', 'animate__fadeInUp', 'visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Add additional animations and effects on load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    const header = document.querySelector('header');
    if (header) {
        header.classList.add('animate__animated', 'animate__slideInDown');
    }
    const slidesContent = document.querySelectorAll('.slide-content');
    slidesContent.forEach((content, index) => {
        content.style.animationDelay = `${index * 0.3}s`;
    });
});

// Slide functionality
const slides = document.querySelector('.slides');
const slideArray = Array.from(document.querySelectorAll('.slide'));
let currentIndex = 0;

function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideArray.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideArray.length) % slideArray.length;
    showSlide(currentIndex);
}

document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000); // Ubah slide setiap 5 detik

// Back button functionality
function goBack() {
    window.history.back();
}
