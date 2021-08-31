let products = [];
let j = 1;

// Création d'un id unique
const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// récupération des données dans le localstorage

console.log(myCart());
const product = JSON.parse(localStorage.getItem("produit"));

// Géneration du tableau
const addTable = (i) => {
  let table = document.getElementById("myTable");
  let row = table.insertRow(j++);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = myCart()[i].nomProduit;
  cell2.innerHTML = myCart()[i].option;
  cell3.innerHTML = myCart()[i].quantity;
  cell4.innerHTML = convertPrice(myCart()[i].price * myCart()[i].quantity);
};

// Vérification si le panier est vide et calcule du prix totale et de la quantité
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
document.getElementById("total").innerHTML = convertPrice(totalPrice());
document.getElementById("totalQuantity").innerHTML = totalQuantity();

document.getElementById("clear").addEventListener("click", () => {
  if (confirm("Voulez-vous vraiment vider votre panier ?")) {
    localStorage.clear();
    window.location.href = "index.html";
  }
  // localStorage.clear();
});

//validation du formulaire et envoie en POST
// const order = document.getElementById("order");
// console.log(order);
const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity =
  /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
// const checkBox = document.getElementById("invalidCheck2");
document.getElementById("button").addEventListener("click", () => {
  let contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };
  if (
    (regexMail.test(contact.email) == true) &
    (regexName.test(contact.firstName) == true) &
    (regexName.test(contact.lastName) == true) &
    (regexCity.test(contact.city) == true) &
    (regexAddress.test(contact.address) == true)
    // (checkBox.checked == true)
  ) {
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
        console.log("CACA");
        window.open("order.html" + "?id=" + uuidv4(), "_self");
      })
      .catch((erreur) => console.log("erreur : " + erreur));
  } else {
  }
});
