let slideIndex = 9;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 60000); // Change slide every 60 seconds
}

function currentSlide(n) {
  showSlide((slideIndex = n));
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let startX = 0;
let endX = 0;

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("touchstart", touchStart);
  slides[i].addEventListener("touchend", touchEnd);
}

function touchStart(event) {
  startX = event.touches[0].clientX;
}

function touchEnd(event) {
  endX = event.changedTouches[0].clientX;
  handleSwipe();
}

function handleSwipe() {
  if (startX - endX > 50) {
    changeSlide(1); // Swipe left
  }
  if (startX - endX < -50) {
    changeSlide(-1); // Swipe right
  }
}

showSlides();

// The rest of your existing code
