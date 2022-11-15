const API_URL = "https://back-end-bsal.herokuapp.com";
const useCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-cards-container]");
const searchInput = document.querySelector("[data-search]");
const selectOption = document.getElementById("select");
//filtrado por Categoria
//https://back-end-bsal.herokuapp.com/products/category/1
selectOption.addEventListener("change", (e) => {
  const valor = e.target.value;
  console.log(valor);
  if (valor !== "") {
    document.getElementById("card-container").innerHTML = "";
    const selceted = fetch(`${API_URL}/products/category/${valor}`, {
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
});
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
