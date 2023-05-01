function create_home() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  content.className = "home";
  const main_headline = document.querySelector(".main_headline");
  main_headline.textContent = "BurgerSpot";
  const side_headline = document.querySelector(".side_headline");
  side_headline.textContent = "Best Burgers";
  console.log("Hello");
}
export { create_home };
