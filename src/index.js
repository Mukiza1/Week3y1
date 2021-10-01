const h1 = document.querySelector(".wiki-item");
const newList = document.createElement("h1");
newList.textContent = "Akita";
newList.classList.add("wiki-header");
h1.appendChild(newList);

const div = document.querySelector(".wiki-item");
const newListItem = document.createElement("div");
newListItem.textContent = "Breed 2";
newListItem.classList.add("wiki-content");
div.appendChild(newListItem);

const p = document.querySelector(".wiki-content");
const newLine = document.createElement("p");
newLine.classList.add("wiki-text");
newLine.textContent =
  "Did you know the word ‘essay’ is derived from a Latin word ‘exagium’, which roughly translates to presenting one’s case? So essays are a short piece of writing representing one’s side of the argument or one’s experiences, stories, etc. Essays are very personalized. So let us learn about types of essays, format, and tips for essay-writing. This is when the writer is narrating an incident or story through the essay. So these are in the first person.";
p.appendChild(newLine);

const div1 = document.querySelector(".wiki-content");
const newLiner = document.createElement("div");
newLiner.classList.add("img-container");
div1.appendChild(newLiner);

const img = document.querySelector(".img-container");
const newLinerr = document.createElement("img");
newLinerr.classList.add("wiki-img");
img.appendChild(newLinerr);
