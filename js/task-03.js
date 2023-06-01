const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ulGallery = document.querySelector(".gallery");

const makeGalleryCard = ({ url, alt }) => `
  <li class="gallery-item">
    <img src="${url}" alt="${alt}" class="gallery-image">
  </li>
`;

const markup = images.map((el) => makeGalleryCard(el)).join("");
ulGallery.insertAdjacentHTML("afterbegin", markup);

ulGallery.classList.add("gallery-container");

const galleryItems = ulGallery.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.classList.add("gallery-item");
});

const galleryImages = ulGallery.querySelectorAll(".gallery-image");
galleryImages.forEach((image) => {
  image.classList.add("gallery-image");
});

// Стилізація
ulGallery.style.display = "flex";
ulGallery.style.padding = "0";

galleryItems.forEach((item) => {
  item.style.margin = "12px";
});

galleryImages.forEach((image) => {
  image.style.maxWidth = "100%";
  image.style.height = "auto";
});
