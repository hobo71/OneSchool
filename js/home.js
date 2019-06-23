// For the slide show
var slides, currentSlide;

slides = document.getElementsByClassName("testmonials__items-item");
currentSlide = 0;

slides[currentSlide].style.display = "block";

function prevSlide() {

    // Hiding the element first
    slides[currentSlide].style.display = "none";

    if (currentSlide == 0) {
        currentSlide = slides.length;
    }

    slides[--currentSlide].style.display = "block";
}

function nextSlide() {

    // Hiding the element first
    slides[currentSlide].style.display = "none";

    if (currentSlide == slides.length - 1) {
        // -1 becuase it will always add one to the value so we can not start from 0
        currentSlide = -1;
    }

    slides[++currentSlide].style.display = "block";

}