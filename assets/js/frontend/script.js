const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navbar.classList.replace("bg-transparant", "nav-color");
  } else if (window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparant");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".button-arrow-right");
  const prevButton = document.querySelector(".button-arrow-left");
  const slideWidth = slides[0].getBoundingClientRect().width;

  let currentIndex = 0;
  console.log("Carousel Initialized");

  function moveToSlide(track, currentSlide, targetSlide) {
    console.log("Moving to slide", targetSlide);
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active");
  }

  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
    console.log("Slide", index, "position set to", slide.style.left);
  });

  nextButton.addEventListener("click", () => {
    console.log("NExt Button Clicked");
    const currentSlide = track.querySelector(".active");
    currentIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[currentIndex];
    moveToSlide(track, currentSlide, nextSlide);
  });

  prevButton.addEventListener("click", () => {
    console.log("Previous Button Clicked");
    const currentSlide = track.querySelector(".active");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    const prevSlide = slides[currentIndex];
    moveToSlide(track, currentSlide, prevSlide);
  });

  slides[0].classList.add("active");
});
