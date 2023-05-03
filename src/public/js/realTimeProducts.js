import { createRowOfProducts } from "./functions.js";

const socket = io();

socket.on("GetProductsUpdated", (productsUpdated) => {
  //Father Element
  const rowBody = document.querySelector(".row.row-cols-1.row-cols-md-4.g-4");
  rowBody.innerHTML = "";
  createRowOfProducts(productsUpdated);
});
