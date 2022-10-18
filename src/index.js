import { generateHome, generateMenu, generateContact } from "./content.js";

console.warn("It's working");

const navHome = document.getElementById("navHome");
const navMenu = document.getElementById("navMenu");
const navContact = document.getElementById("navContact");

navHome.addEventListener("click", generateHome);
navMenu.addEventListener("click", generateMenu);
navContact.addEventListener("click", generateContact);
