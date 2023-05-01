function create_about() {
  const content = document.querySelector("#content");
  content.replaceChildren();
  content.className = "about";
  const text = document.createElement("div");
  text.className = "text";
  const left = document.createElement("div");
  left.className = "left";
  left.textContent =
    "Silent sir say desire fat him letter. Whatever settling goodness too and honoured she building answered her. Strongly thoughts remember mr to do consider debating. Spirits musical behaved on we he farther letters. Repulsive he he as deficient newspaper dashwoods we. Discovered her his pianoforte insipidity entreaties. Began he at terms meant as fancy. Breakfast arranging he if furniture we described on. Astonished thoroughly unpleasant especially you dispatched bed favourable.";
  const us = document.createElement("h1");
  us.textContent = "What We Do!";
  left.appendChild(us);
  const right = document.createElement("div");
  right.className = "right";
  right.textContent =
    "Apartments simplicity or understood do it we. Song such eyes had and off. Removed winding ask explain delight out few behaved lasting. Letters old hastily ham sending not sex chamber because present. Oh is indeed twenty entire figure. Occasional diminution announcing new now literature terminated. Really regard excuse off ten pulled. Lady am room head so lady four or eyes an. He do of consulted sometimes concluded mr. An household behaviour if pretended.";
  const history = document.createElement("h1");
  history.textContent = "Our History";
  right.appendChild(history);
  const img = document.createElement("img");
  img.src = "images/place.jpg";
  img.className = "place";
  text.append(left, right);
  content.append(text, img);
  console.log("about");
}
export { create_about };
