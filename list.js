fetch("https://kea-alt-del.dk/t7/api//products?limit=12")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  // Looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct() {
  console.log(product);
  // Fang template
  const template = document.querySelector("smallProductTemplate").textContent;
  // Lav en kopi
  const copy = template.cloneNode(true);
  // Ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("img").alt = produkt.productdisplayname;
  // Appende
  document.querySelector("main").append.Child(copy);
}

/* 
id: 1163,
gender: "Men",
category: "Apparel",
subcategory: "Topwear",
articletype: "Tshirts",
season: "Summer",
productionyear: 2011,
usagetype: "Sports",
productdisplayname: "Sahara Team India Fanwear Round Neck Jersey",
price: 895,
discount: null,
brandname: "Nike",
soldout: 0 
*/
