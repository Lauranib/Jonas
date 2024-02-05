// Step 1: Chose the <template>'s content
const template = document.querySelector("template").content;
console.log(template);

// Step 2: Make a "clone"
const copy = template.cloneNode(true);
copy.querySelector("h2").textContent = "Yay!";

const parent = document.querySelector(".grid");
parent.appendChild(copy);

// Step 3: Change the content

// Step 4: Choose the new "parent" element

// Step 5: Add (Append) the clone to the DOM
