// let product = localStorage.getItem("cart");
 const product = JSON.parse(localStorage.getItem("cart"));
console.log(product.price);

window.addEventListener("load", () => {
    document.getElementById("product").textContent =  product.name;
    document.getElementById("quantity").textContent = product.quantity;
    document.getElementById("price").textContent = product.price;
    document.getElementById("total").textContent =
      product.quantity * product.price;
  console.log("Toutes les ressources sont chargées !");
});
