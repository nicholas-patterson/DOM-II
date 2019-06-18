// Your code goes here

const mainHeading = document.querySelector(".nav-container .logo-heading");

mainHeading.addEventListener("mouseenter", event => {
  mainHeading.style.color = "crimson";
});

mainHeading.addEventListener("mouseleave", event => {
  mainHeading.style.color = "black";
});

const nav = document.querySelectorAll("header .nav a");
nav.forEach(link => {
  link.addEventListener("click", event => {
    mainHeading.textContent = link.textContent;
    event.preventDefault();
  });

  link.addEventListener("mouseenter", event => {
    link.style.color = "crimson";
    event.stopPropagation();
  });

  link.addEventListener("mouseleave", event => {
    link.style.color = "black";
  });
});

const navContainer = document.querySelector(".main-navigation");

navContainer.addEventListener("mouseleave", event => {
  mainHeading.textContent = "Fun Bus";
});

// dbl click
const footer = document.querySelector(".footer p");
footer.addEventListener("dblclick", event => {
  footer.innerHTML = "<p>Nicholas Patterson <span>&copy;</span> 2019</p>";
});

const welcomeText = document.querySelector(".intro h2");

welcomeText.addEventListener("drag", event => {
  mainHeading.textContent = "Put Me Down";
});

const body = document.querySelector("body");
const letsGo = document.querySelector(".content-section .text-content .letsGo");

body.addEventListener("mouseover", event => {
  if (event.screenX > 3912 && event.screenX < 4716) {
    event.stopPropagation();
    letsGo.innerHTML = "<h1>Main Content</h1>";
  } else {
    letsGo.innerHTML = "<h1>GET OFF MY CONTAINER</h1>";
  }
});

window.addEventListener("scroll", event => {
  nav.style.backgroundColor = "crimson";
});

const photo = document.querySelector("#photo");
TweenLite.to(photo, 2, { width: "800px", height: "300px" });
TweenLite.to(photo, 2, { boxShadow: "0px 0px 20px black", color: "#FC0" });
