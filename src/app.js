import Home from "./Views/Home.js";
import Product from "./Views/Product.js";
const routes = {
  "/": Home,
  "/products/:id": Product,
};
const router = async () => {
  const main = document.getElementById("main-container");
  main.innerHTML = await Home.render();
};
window.addEventListener("load", router);
