document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlides(n) {
        if (n >= totalSlides) slideIndex = 0;
        if (n < 0) slideIndex = totalSlides - 1;
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    function plusSlides(n) {
        slideIndex += n;
        showSlides(slideIndex);
    }

    const prevButton = document.querySelector('.slider-buttons button:first-child');
    const nextButton = document.querySelector('.slider-buttons button:last-child');

    prevButton.addEventListener('click', () => plusSlides(-1));
    nextButton.addEventListener('click', () => plusSlides(1));

    setInterval(() => plusSlides(1), 5000);
});