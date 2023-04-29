const content = document.querySelector(".content-home");
function create_home() {
  content.replaceChildren();

  const links_to_add = ["Home", "About", "Menu", "Location"];
  const headlines = document.createElement("div");
  const headline_one = document.createElement("h1");
  headline_one.textContent = "Holy Burgers";
  const headline_two = document.createElement("h2");
  headline_two.textContent = "The Best Burger In New York";
  headlines.append(headline_one, headline_two);

  const nav = document.createElement("div");
  const links = document.createElement("ul");
  let curr_li;
  let curr_a;
  links.className = "links";
  for (let link of links_to_add) {
    curr_li = document.createElement("li");
    curr_a = document.createElement("button");
    curr_a.textContent = link;
    curr_a.id = link;
    curr_li.appendChild(curr_a);
    links.appendChild(curr_a);
  }
  content.append(headlines, links);
}

export { create_home };
