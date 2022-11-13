import NavBar from "./NavBar.js";
const Home = {
  render: async () => {
    //const { products } = Data;
    const API_URL = "http://localhost:3000";
    const data = await fetch(`${API_URL}/category`, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    if (!data || !data.ok) {
      return `<div>Error in getting Data</div>`;
    }
    const categoria = await data.json();
    console.log("category " + categoria);

    //Productos
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
    return `${NavBar} <div> <div class='flex flex-wrap my-1'>
    ${
      (console.log("priemro" + productos),
      productos[0].map(
        (p) =>
          `
<div class="w-1/4 max-w-xl bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 pb-2	max-h-xl my-1">
    <a href="#" >
        <div class='box-content'>
        <img class="p-8 rounded-t-lg max-h-xs max-w-xs" src=${
          p.url_image
        } alt="no stock">
        </div>
    </a>
    <div class="px-3 pb-3">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${
              p.name
            }</h5>
        </a>
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${
          p.category
        }</h5>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">${
              p.price
            }</span>
            <span class="text-3xl font-bold text-lime-400	 dark:text-lime-400	">${
              p.discount == 0 ? "" : "-" + p.discount + "%"
            }</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
`
      ))
    }
    </div> <div/>`;
  },
};
export default Home;
