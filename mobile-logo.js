document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.querySelector("header .container.mx-auto > div:nth-child(2)");

  if (headerContainer && window.innerWidth <= 768) {
    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.style.position = "absolute";
    logoLink.style.top = "0";
    logoLink.style.left = "0";
    logoLink.style.height = "120px";
    logoLink.style.width = "180px";
    logoLink.style.zIndex = "3";
    logoLink.style.backgroundImage = "url('Logo.jpg')";
    logoLink.style.backgroundSize = "contain";
    logoLink.style.backgroundRepeat = "no-repeat";
    logoLink.style.backgroundPosition = "top left";
    logoLink.style.display = "block";
    headerContainer.appendChild(logoLink);
  }
});
