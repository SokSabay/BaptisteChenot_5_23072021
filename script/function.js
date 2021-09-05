// fonction pour passer de centime à euro avec la devise 
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
// retourne le panier
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
// permet d'incrémenter ou de décrémenter
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
// permet d'ajouter au panier le produit et la quantité
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
    produitLocalstorage[myCart().findIndex(index)].quantity +=
      articleChoice.quantity;
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  } else {
    produitLocalstorage.push(articleChoice);
    localStorage.setItem("produit", JSON.stringify(produitLocalstorage));
  }
};

const functionPost = (e) => {
  let contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  };

  // Permet d'envoyer au back end les informations de l'utilisateur 
  if (
    (regexMail.test(contact.email) == true) &
    (regexName.test(contact.firstName) == true) &
    (regexName.test(contact.lastName) == true) &
    (regexCity.test(contact.city) == true) &
    (regexAddress.test(contact.address) == true)
    // (checkBox.checked == true)
  ) {
    e.preventDefault();
    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact, products }),
    })
      .then((response) => response.json())
      //then les donnée provenant de response (response n'est qu'une variable) en JSON...
      .then((req) => {
        localStorage.setItem("order", JSON.stringify(req));
        window.open("order.html" + "?id=" + uuidv4(), "_self");
      })
      //Sinon génération de l'erreur sur le console.
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};