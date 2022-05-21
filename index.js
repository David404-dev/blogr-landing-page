const productLinks = document.querySelector(".product-links");
const companyLinks = document.querySelector(".company-links");
const connectLinks = document.querySelector(".connect-links");
const productTab = document.getElementById("product-tab");
const companyTab = document.getElementById("company-tab");
const connectTab = document.getElementById("connect-tab");

// for desktop links
productTab.addEventListener("click", () => {
  productLinks.classList.toggle("display-block");
});

companyTab.addEventListener("click", () => {
  companyLinks.classList.toggle("display-block");
});

connectTab.addEventListener("click", () => {
  connectLinks.classList.toggle("display-block");
});

// for mobile mneu
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.add("display-none");
  closeIcon.classList.add("display-block");
  mobileMenu.classList.add("display-block");
});

closeIcon.addEventListener("click", () => {
  closeIcon.classList.remove("display-block");
  hamburgerIcon.classList.remove("display-none");
  mobileMenu.classList.remove("display-block");
});

const mobileProductLink = document.getElementById("product-mobile-link");
const innerProductLinks = document.querySelector(".inner-product-mobile-links");
const mobileCompanyLink = document.getElementById("company-mobile-link");
const innerCompanyLinks = document.querySelector(".inner-company-mobile-links");
const mobileConnectLinks = document.getElementById("connect-mobile-link");
const innerConnectLinks = document.querySelector(".inner-connect-mobile-links");
const productArrow = document.getElementById("product-arrow");
const companyArrow = document.getElementById("company-arrow");
const connectArrow = document.getElementById("connect-arrow");
mobileProductLink.addEventListener("click", () => {
  productArrow.classList.toggle("flip-arrow");
  innerProductLinks.classList.toggle("display-flex");
});

mobileCompanyLink.addEventListener("click", () => {
  companyArrow.classList.toggle("flip-arrow");
  innerCompanyLinks.classList.toggle("display-flex");
});

mobileConnectLinks.addEventListener("click", () => {
  connectArrow.classList.toggle("flip-arrow");
  innerConnectLinks.classList.toggle("display-flex");
});
