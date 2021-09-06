let products = new Array();
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
  cell3.innerHTML = `<input id="${i}" type="number" value="${
    myCart()[i].quantity
  }" onchange="valueUpdate(this)">`;
  cell4.innerHTML = convertPrice(myCart()[i].price * myCart()[i].quantity);
};

// Vérification si le panier est vide et calcule du prix totale et de la quantité
if (product == null || myCart().length === 0) {
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
});

// validation du formulaire et envoie en POST

const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity =
  /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;

document.getElementById("button").addEventListener("click", (e) => {
  functionPost(e);
});

const valueUpdate = (val) => {
  if (val.value <= 0) {
    val.value = 1;
    var check = confirm("Voulez-vous supprimer cet article ?");
    if (check == true) {
      product.splice(val.id, 1);
      localStorage.setItem("produit", JSON.stringify(product));
      document.location.reload();
      if (myCart().length === 0) {
        window.alert("Votre panier est vide !");
        window.location.href = "index.html";
      }
    }
  } else {
    product[val.id].quantity = parseInt(val.value);

    localStorage.setItem("produit", JSON.stringify(product));
    document.getElementById("total").innerHTML = convertPrice(totalPrice());
    document.getElementById("totalQuantity").innerHTML = totalQuantity();
    val.parentNode.parentNode.cells[3].innerHTML = convertPrice(
      myCart()[val.id].price * myCart()[val.id].quantity
    );
  }
};
