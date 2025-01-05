let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    updateProgressBar();
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function updateProgressBar() {
    const slides = document.querySelectorAll('.carousel-item');
    const progress = document.querySelector('.progress');
    const progressWidth = ((currentIndex + 1) / slides.length) * 100;
    progress.style.width = `${progressWidth}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});