document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 768) return; // Wenn Desktop, Skript nicht ausführen

  const strip = document.querySelector(".image-strip");
  const slides = strip.querySelectorAll(".image-wrapper");
  const dots = document.querySelectorAll(".carousel-dots span");

  // Start beim mittleren Bild
  const midImage = strip.querySelector(".middle-image");
  if (strip && midImage) {
    strip.scrollLeft = midImage.offsetLeft - (window.innerWidth - midImage.offsetWidth) / 2;
  }

  // Aktive Dots setzen
  const updateDots = () => {
    let closestIndex = 0;
    let closestDistance = Infinity;
    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const viewportCenter = strip.scrollLeft + window.innerWidth / 2;
      const distance = Math.abs(slideCenter - viewportCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    dots.forEach((dot, index) => {
      dot.style.backgroundColor = index === closestIndex ? "#333" : "#ccc";
    });
  };

  strip.addEventListener("scroll", updateDots);
  updateDots();
});
