function convertPrice(productPrice) {
  let price = `${productPrice}`;
  price = Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price / 100);
  return price;
}

var count = 1;
var countEl = document.getElementById("count");
function plus() {
  count++;
  countEl.value = count;
}
function minus() {
  if (count > 1) {
    count--;
    countEl.value = count;
  }
}

function stockage() {
  let articleChoice = {
    nomProduit: cardObject.name,
    idProduit: cardObject._id,
    option: document.getElementById("article__option").value,
    quantity: +document.getElementById("count").value,
    price: cardObject.price,
  };
  console.log(cardObject.name);

  let produitLocalstorage = JSON.parse(localStorage.getItem("produit"));
  let doublon = true;

  if (produitLocalstorage === null) {
    produitLocalstorage = [];
    produitLocalstorage.push(articleChoice);

    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
    console.log("no tasks");
  } else {
    produitLocalstorage.every((element, index) => {
      if (element.nomProduit == cardObject.name) {
        produitLocalstorage[index].quantity += articleChoice.quantity;
        localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
        doublon = true;
        return false;
      } else {
        console.log("combien");
        doublon = false;
        return true;
      }
    });
  }
  if (doublon) {
    console.log(doublon);
  } else {
    produitLocalstorage.push(articleChoice);
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  }
  // if (produitLocalstorage) {
  //   // produitLocalstorage.push(articleChoice);
  //   // localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  // } else {
  //   produitLocalstorage = [];
  //   produitLocalstorage.push(articleChoice);

  //   localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  // }
}
