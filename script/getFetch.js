// focntion pour mettre la devise en euro
const convertPrice = (productPrice) => {
  let price = `${productPrice}`;
  price = Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price / 100);
  return price;
}

let count = 1;
let countEl = document.getElementById("count");
const plus = () => {
  count++;
  countEl.value = count;
}
const minus = () => {
  if (count > 1) {
    count--;
    countEl.value = count;
  }
}

const stockage = () => {
  let articleChoice = {
    nomProduit: cardObject.name,
    idProduit: cardObject._id,
    option: document.getElementById("article__option").value,
    quantity: +document.getElementById("count").value,
    price: cardObject.price,
  };

  let produitLocalstorage = JSON.parse(localStorage.getItem("produit"));
  let doublon = true;

  if (produitLocalstorage === null) {
    produitLocalstorage = [];
    produitLocalstorage.push(articleChoice);
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  } else {
    produitLocalstorage.every((element, index) => {
      if (element.nomProduit == cardObject.name) {
        produitLocalstorage[index].quantity += articleChoice.quantity;
        localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
        doublon = true;
        return false;
      } else {
        doublon = false;
        return true;
      }
    });
  }
  if (doublon) {
  } else {
    produitLocalstorage.push(articleChoice);
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  }
}
