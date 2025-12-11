// Holder styr på hvilket slide der er aktivt
let slideIndex = 1;

// Gemmer timeren til automatisk skift, så vi kan nulstille den
let autoTimer = null;

// Når DOM’en er klar, vis det første slide
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
});

// Skift slide frem eller tilbage (bruges til pile-knapper)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hop direkte til et specifikt slide (bruges til prikker/hjerter)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Hovedfunktionen der styrer hvilket slide der vises
function showSlides(n) {
  let i;

    // Hent alle slides og alle hjerte-prikker
  const slides = document.getElementsByClassName("review-card");
  const dots = document.getElementsByClassName("dot-heart");

  // Hvis der ikke findes slides, stop funktionen
  if (slides.length === 0) return;

   // Loop slideIndex rundt hvis man går for langt
  if (n > slides.length) {
    slideIndex = 1; // hvis vi går ud over sidste slide → hop til første
  }
  if (n < 1) {
    slideIndex = slides.length; // hvis vi går til før første → hop til sidste
  }

  // Skjul alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Fjerner "active" fra alle hjerter 
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Vis det aktuelle slide (slideIndex - 1 fordi arrays starter ved 0)
  slides[slideIndex - 1].style.display = "block";
  
  // Gør det tilsvarende hjerte aktivt (hvis det findes)
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }

 
  // Automatisk skift hvert 10. sekund → nulstil timeren hver gang et slide vises
  clearTimeout(autoTimer);
  autoTimer = setTimeout(function () {
    plusSlides(1);
  }, 10000);
}