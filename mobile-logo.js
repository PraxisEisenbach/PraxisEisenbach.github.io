document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.querySelector("header .container.mx-auto");

  if (!headerContainer) return;

  if (window.innerWidth <= 768) {
    // Logo-Link erzeugen und positionieren
    let existingLogoLink = document.querySelector('header .container.mx-auto a.logo-mobile');
    if (!existingLogoLink) {
      const logoLink = document.createElement("a");
      logoLink.href = "index.html";
      logoLink.classList.add("logo-mobile");
      logoLink.style.backgroundImage = "url('/Logo.jpg')";
      headerContainer.querySelector("div:nth-child(2)").prepend(logoLink);
    }

    // Button "Erstgespräch vereinbaren" einfügen/verlinken
    let button = document.getElementById("erstgespraech-button");
    if (!button) {
      button = document.createElement("a");
      button.id = "erstgespraech-button";
      button.href = "Kontakt.html";
      button.textContent = "Erstgespräch vereinbaren";
      headerContainer.appendChild(button);
    }
  }
});
