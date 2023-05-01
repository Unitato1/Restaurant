import { create_home } from "./home";
import { create_menu } from "./menu";
import { create_about } from "./about";
// const content = document.querySelector("#content");
create_home();
const home = document.getElementById("Home");
const about = document.getElementById("About");
const menu = document.getElementById("Menu");
const location = document.getElementById("lolection");
home.addEventListener("click", () => {
  create_home();
});

menu.addEventListener("click", () => {
  create_menu();
});
about.addEventListener("click", () => {
  create_about();
});
console.log("Helloooooo!");
