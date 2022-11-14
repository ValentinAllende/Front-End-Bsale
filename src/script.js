const API_URL = "https://back-end-bsale-lg4ld0t4s-valentinallende.vercel.app";
const fetchingProducts = async () => {
  const response = await fetch(`${API_URL}/products`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  if (!response || !response.ok) {
    return `<div>Error in getting Data</div>`;
  }
  const productos = await response.json();
  productos[0].map((p) => {
    const resultado = {
      name: p.name,
      url_image: p.url_image,
      price: p.price,
      discount: p.discount,
      category: p.category,
    };
  });
  return productos;
};

document.addEventListener("DomContentLoaded", fetchingProducts, false);
