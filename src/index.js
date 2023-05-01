import { create_home } from "./home";
import { create_menu } from "./menu";

// const content = document.querySelector("#content");
create_home();
const home = document.getElementById("Home");
const about = document.getElementById("about");
const menu = document.getElementById("Menu");
const location = document.getElementById("lolection");
home.addEventListener("click", () => {
  create_home();
});

menu.addEventListener("click", () => {
  create_menu();
});
console.log("Helloooooo!");
