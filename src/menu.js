function create_menu() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  let item;
  let img;
  let content_item;
  content.className = "menu";
  for (let i = 0; i < 8; i++) {
    item = document.createElement("div");
    item.className = "item";
    content_item = document.createElement("div");
    content_item.textContent = "Burger";
    img = document.createElement("div");
    img.className = "image";
    if (i % 2) {
      item.append(img, content_item);
    } else {
      item.append(content_item, img);
    }
    content.appendChild(item);
  }
}

export { create_menu };
