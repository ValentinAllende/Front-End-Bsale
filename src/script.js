const API_URL = "https://back-end-bsal.herokuapp.com";
const useCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-cards-container]");
const searchInput = document.querySelector("[data-search]");

//Filtrado por Nombre
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const value = e.target.value;

    if (!"") {
      document.getElementById("card-container").innerHTML = "";
      const filter = fetch(`${API_URL}/products/search?name=${value}`, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          data.map((x) => {
            const card = useCardTemplate.content.cloneNode(true).children[0];
            const name = card.querySelector("[data-name]");
            const price = card.querySelector("[data-price]");
            const discount = card.querySelector("[data-discount]");
            const image = card.querySelector("[data-image]");
            name.textContent = x.name;
            price.textContent = x.price;
            discount.textContent = x.discount;
            image.textContent = x.url_image;
            userCardContainer.append(card);
          });
        });
    }
  }
});

//peticion Todos los productos
const response = fetch(`${API_URL}/products`, {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    data[0].map((x) => {
      const card = useCardTemplate.content.cloneNode(true).children[0];
      const name = card.querySelector("[data-name]");
      const price = card.querySelector("[data-price]");
      const discount = card.querySelector("[data-discount]");
      const image = card.querySelector("[data-image]");
      name.textContent = x.name;
      price.textContent = x.price;
      discount.textContent = x.discount;
      image.textContent = x.url_image;
      userCardContainer.append(card);
    });
  });

//buscador desde el back
// if (!"") {
//   const filter = fetch(`${API_URL}/products?search=${value}`, {
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => console.log("filtrado: " + data));
// }
// document.addEventListener("DomContentLoaded", fetchingProducts, false);
// const search = () => {
//   //INPUT SEARCH BAR
//   const input = document.getElementById("search-navbar");

//   input.addEventListener("input", (e) => {
//       const value = e.target.value;
//       console.log('input: ' + value);
//   })
// };
