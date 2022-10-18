import { generateHome, generateMenu, generateContact } from "./content.js";
import "./style.css";

console.warn("It's working");

const navHome = document.querySelectorAll(".navHome");
const navMenu = document.querySelectorAll(".navMenu");
const navContact = document.querySelectorAll(".navContact");

navHome.forEach((button) => {
  button.addEventListener("click", generateHome);
});

navMenu.forEach((button) => {
  button.addEventListener("click", generateMenu);
});

navContact.forEach((button) => {
  button.addEventListener("click", generateContact);
});

generateHome();
