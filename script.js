const template = document.querySelector("template").content;
console.log(template);

const copy = template.cloneNode(true);

const parent = document.querySelector(".grid");
parent.appendChild(copy);
