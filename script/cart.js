let products = [];

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
//
console.log(uuidv4());
const product = JSON.parse(localStorage.getItem("produit"));
let j = 1;

function addTable(i) {
  let table = document.getElementById("myTable");
  let row = table.insertRow(j++);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = product[i].nomProduit;
  cell2.innerHTML = product[i].option;
  cell3.innerHTML = product[i].quantity;
  cell4.innerHTML = convertPrice(product[i].price * product[i].quantity);
}
console.log(product);

if (product == null) {
  window.alert("Votre panier est vide");
  window.location.href = "index.html";
} else {
  for (i in product) {
    addTable(i);
    products.push(product[i].idProduit);
    i++;
  }
}
console.log(products);
// function total() {

//        let TotalValue = 0;

//        $("tr #loop").each(function (cell[i], product[i].price) {
//          currentRow = parseFloat($(this).text());
//          TotalValue += currentRow;
//        });

//        document.getElementById('total').innerHTML = TotalValue;

// };





document.getElementById("button").addEventListener("click", () => {
  let contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };
  console.log(contact);
  // window.open("order.html" + "?id=" + uuidv4(), "_self");
  // console.log(uuidv4());

  // on envoie en POST
  fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ contact, products }),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("order", JSON.stringify(data));
    })
    .catch((erreur) => console.log("erreur : " + erreur));
    window.open("order.html" + "?id=" + uuidv4(), "_self");
});
