// Your code goes here

const mainHeading = document.querySelector(".logo-heading");

mainHeading.addEventListener("mouseover", event => {
  mainHeading.style.fontSize = "70px";
});

mainHeading.addEventListener("mouseout", event => {
  mainHeading.style.fontSize = "40px";
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    link.style.color = "crimson";
    event.preventDefault();
  });
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    button.textContent = "You Clicked On Me !";
    button.style.backgroundColor = "crimson";
  });
});

const body = document.querySelector("body");

window.addEventListener("scroll", event => {
  body.style.backgroundColor = "aliceblue";
});

const funBus = document.querySelector("#photo");

funBus.addEventListener("dblclick", event => {
  funBus.style.display = "none";
});

secondaryHeading = document.querySelectorAll("h2");

secondaryHeading.forEach(heading => {
  heading.addEventListener("drag", event => {
    mainHeading.textContent = "PUT ME DOWN !";
  });
  heading.addEventListener("mouseover", event => {
    mainHeading.textContent = "Fun bus";
  });
});

// Stretch Task

let picture = document.getElementById("gsockPhoto");
TweenLite.to(photo, 2, { width: "200px", height: "150px" });
