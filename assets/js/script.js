'use strict';

/**
 * Scroll Animations using IntersectionObserver API
 */

const abs1 = document.querySelectorAll('.abs-icon')[0];
const abs2 = document.querySelectorAll('.abs-icon')[1];
const abs3 = document.querySelectorAll('.abs-icon')[2];
const absImg = document.querySelector(".abs-img");
const imgCover = document.querySelector(".animated-img");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      abs1.classList.add('floating');
      abs2.classList.add('floating');
      abs3.classList.add('floating');
      absImg.classList.add("absImg");
      imgCover.classList.add("imgCover");
      return; // if we added the class, exit the function
    }
    
    // We're not intersecting, so remove the class!
    abs1.classList.remove('floating');
    abs2.classList.remove('floating');
    abs3.classList.remove('floating');
    absImg.classList.remove("absImg");
    imgCover.classList.remove("imgCover");
  });
});

// Observe all .abs-icon elements
const absIcons = document.querySelectorAll('.abs-icon');
absIcons.forEach(icon => {
  observer.observe(icon);
});
observer.observe(document.querySelectorAll(".abs-img")[0]);
observer.observe(document.querySelectorAll(".animated-img")[0]);


/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});








