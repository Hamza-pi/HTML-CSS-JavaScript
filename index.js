const bar = document.getElementById("bar");
const nav = document.getElementById("nav-bar");
const closes = document.getElementById("close");
const navLinks = document.querySelectorAll(".link");
const activeLink = document.querySelector(".active");
const products = document.querySelectorAll(".pro");
const mainImg = document.getElementById("MainImg");
const smImages = document.querySelectorAll("#small-img");

products.forEach((product) => {
  product.addEventListener("click", () => {
    location.href = "prod_det.html";
  });
});

bar.addEventListener("click", () => {
  nav.classList.add("active");
});
closes.addEventListener("click", () => {
  nav.classList.remove("active");
});

smImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    mainImg.src = e.target.src;
  });
});
