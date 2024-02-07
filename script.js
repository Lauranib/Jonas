//fetche
fetch("https://kea-alt-del.dk/t7/api//products?limit=12")
  .then((res) => res.json())
  .then(showClothes);

function showClothes(clothes) {
  //loope
  clothes.forEach(showClothing);
}

function showClothing(clothing) {
  //clone, ændre, appende
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = clothing.productdisplayname;
  copy.querySelector("p.category").textContent = clothing.category;
  copy.querySelector("p.description").textContent = clothing.description;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
