// let product = localStorage.getItem("cart");
const product = JSON.parse(localStorage.getItem("cart"));
console.log(product.price);

window.addEventListener("load", () => {
  document.getElementById("product").textContent = product.name;
  document.getElementById("quantity").textContent = product.quantity;
  document.getElementById("price").textContent = product.price;
  document.getElementById("total").textContent =
    product.quantity * product.price;
  console.log("Toutes les ressources sont chargées !");
});


// const test = async () => {
//   await fetch("http://localhost:3000/api/cameras/order", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(descriptionData),
//   })
//     .then((res) => res.json())
//     .then(console.log);
// };
// window.location.href = "cart.html";

document.getElementById("button").addEventListener("click", () => {

    console.log(data);
    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
});
