const products = [
  { name: "Shirt", category: "Clothes", price: 500, rating: 4.5 },
  { name: "Shoes", category: "Footwear", price: 1200, rating: 4.7 },
  { name: "Watch", category: "Accessories", price: 2000, rating: 4.8 },
  { name: "Jeans", category: "Clothes", price: 1500, rating: 4.3 },
  { name: "Sandals", category: "Footwear", price: 800, rating: 4.1 },
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOptions = document.getElementById("sortOptions");

function displayProducts(list) {
  productContainer.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: ₹${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;
    productContainer.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];
  const category = categoryFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  switch (sortOptions.value) {
    case "priceLowHigh":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceHighLow":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", applyFilters);
sortOptions.addEventListener("change", applyFilters);

displayProducts(products);
