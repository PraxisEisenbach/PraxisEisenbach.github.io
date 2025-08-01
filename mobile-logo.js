document.addEventListener("DOMContentLoaded", function () {
  // Finde den Header-Container, in dem das Logo platziert werden soll
  const headerContainer = document.querySelector("header .container.mx-auto");

  // Nur auf mobilen Geräten ausführen (max. 768px Breite)
  if (headerContainer && window.innerWidth <= 768) {
    // Erstelle den Logo-Link
    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.classList.add("logo-mobile"); // Verwende CSS-Klasse statt Inline-Styling

    // Füge das Logo als erstes Element im Header-Container ein
    headerContainer.insertBefore(logoLink, headerContainer.firstChild);
  }
});
