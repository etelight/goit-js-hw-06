const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEles = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liEle = document.createElement("li");
  liEle.textContent = ingredient;
  liEle.classList.add("item");
  ulEles.appendChild(liEle);
});
