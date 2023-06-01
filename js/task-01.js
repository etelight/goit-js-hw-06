const liEles = document.querySelectorAll(".item");

console.log(`Number of categories: ${liEles.length}`);

liEles.forEach((liEle) => {
  const titleEle = liEle.querySelector("h2").textContent;
  console.log(`Category: ${titleEle}`);
  const numberEles = liEle.querySelectorAll("li").length;
  console.log(`Elements: ${numberEles}`);
});
