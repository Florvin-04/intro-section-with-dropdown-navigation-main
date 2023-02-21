const body = document.querySelector("body");

const hamburgerMenu = document.querySelector(".mobile-nav-toggle");
const sideNav = document.querySelector(".side-nav[data-visibility='false']");

const featureBtn = document.querySelector(".features");
const featureContent = document.querySelector(`.feature-animation`);

const companyBtn = document.querySelector(".company");
const companyContent = document.querySelector(`.company-animation`);

hamburgerMenu.addEventListener("click", () => {
  const visibility = sideNav.getAttribute("data-visibility");
  if (visibility === "false") {
    sideNav.dataset.visibility = true;
    hamburgerMenu.style.setProperty("background-image", "url(./images/icon-close-menu.svg)");
    body.style.setProperty("background-color", "hsl(0 0% 41%)");
  } else {
    sideNav.dataset.visibility = false;
    hamburgerMenu.style.setProperty("background-image", "url(./images/icon-menu.svg)");
    body.style.setProperty("background-color", "white");
    // hamburgerMenu.style.setProperty("height", "1rem");
  }
  //   console.log(sideNav.dataset.visibility);

  //   sideNav.style.setProperty("transform", "translateX(0)");
});

featureBtn.addEventListener("click", () => {
  const animate = featureContent.getAttribute("data-animate-feature");

  if (animate === "false") {
    featureContent.dataset.animateFeature = true;
    featureBtn.style.setProperty("--feature-image", "url(./images/icon-arrow-up.svg)");
    featureContent.style.setProperty("height", "10rem");
    featureContent.style.setProperty("visibility", "visible");
  } else {
    featureContent.dataset.animateFeature = false;
    featureBtn.style.setProperty("--feature-image", "url(./images/icon-arrow-down.svg)");
    featureContent.style.setProperty("height", "0");
    featureContent.style.setProperty("visibility", "hidden");
  }
  //   console.log(animate);
});

companyBtn.addEventListener("click", () => {
  const animate = companyContent.getAttribute("data-animate-company");
  //   console.log(animate);

  if (animate === "false") {
    companyContent.dataset.animateCompany = true;
    companyBtn.style.setProperty("--feature-image", "url(./images/icon-arrow-up.svg)");
    companyContent.style.setProperty("height", "7rem");
  } else {
    companyContent.dataset.animateCompany = false;
    // companyContent.dataset.animateCompnay = false;
    companyBtn.style.setProperty("--feature-image", "url(./images/icon-arrow-down.svg)");
    companyContent.style.setProperty("height", "0");
  }
});
