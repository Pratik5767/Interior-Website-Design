// Spinner JS Libraray
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const sliderTrack = document.getElementById('sliderTrack');

function showSlide(index) {
    const newPosition = -index * 100 + '%';
    sliderTrack.style.transform = 'translateX(' + newPosition + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Home Sticky
let headerEl = document.querySelector("header");
window.onscroll = () => {
    if (window.scrollY > 60) {
        headerEl.classList.add(`sticky`);
    }
    else{
        headerEl.classList.remove(`sticky`);
    }
}

// Hamburger navbar
const sidebarEl = document.querySelector('.sidebar')

function showSideBar() {
    sidebarEl.style.display = 'block';
}

function hideSideBar() {
    sidebarEl.style.display = 'none';
}