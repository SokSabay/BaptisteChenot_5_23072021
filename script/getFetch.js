// focntion pour mettre la devise en euro
const convertPrice = (productPrice) => {
  let price = `${productPrice}`;
  price = Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(price / 100);
  return price;
};

const checkAvailability = (test, stockage) => {
  return test.some((element) => stockage.name === element.nomProduit);
};
const myCart = () => {
  return JSON.parse(localStorage.getItem("produit"));
};
// retourne le prix total du localstorage en centimes
const totalPrice = () => {
  let price = 0;
  myCart().forEach((element) => {
    price += parseInt(element.price * element.quantity);
  });
  return price;
};
// retourne la quantité total du localstorage
const totalQuantity = () => {
  let quantity = 0;
  myCart().forEach((element) => {
    quantity += element.quantity;
  });
  return quantity;
};

let count = 1;
let countEl = document.getElementById("count");

const plus = () => {
  count++;
  countEl.value = count;
};
const minus = () => {
  if (count > 1) {
    count--;
    countEl.value = count;
  }
};

const stockage = () => {
  let articleChoice = {
    nomProduit: cardObject.name,
    idProduit: cardObject._id,
    option: document.getElementById("article__option").value,
    quantity: +document.getElementById("count").value,
    price: cardObject.price,
  };

  let produitLocalstorage = myCart();

  if (produitLocalstorage === null) {
    produitLocalstorage = [];
    produitLocalstorage.push(articleChoice);
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  }
  if (checkAvailability(myCart(), cardObject)) {
    const index = (element) => cardObject.name === element.nomProduit;
    index(myCart());
    console.log(myCart().findIndex(index));

    produitLocalstorage[myCart().findIndex(index)].quantity +=
      articleChoice.quantity;
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  } else {
    console.log("caca");
    produitLocalstorage.push(articleChoice);
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  }
};
