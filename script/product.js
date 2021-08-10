var cardObject = new Array();
var articleId = 0;

(async function () {
  this.articleId = getArticleId();
  console.log(articleId);
  const article = await getArticle(articleId);
  hydrateArticle(article);
})();

// Récupere l'id contenu dans le lien
function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}

// Récupere l'API
function getArticle(articleId) {
  return fetch(`http://localhost:3000/api/cameras/${articleId}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (articles) {
      articleOption = articles;
      return articles;
    });
}

// Afficher les informations de l'article
const hydrateArticle = async (article) => {
  await article;
  document.getElementById("article__title").textContent = article.name;
  document.getElementById("article__price").textContent = article.price;
  document.getElementById("article__description").textContent =
    article.description;
  document.getElementById("imgID").src = article.imageUrl;

  // cardObject = {
  //   name: article.name,
  //   price: article.price,
  // };
  // console.log(cardObject);
  const select = document.getElementById("article__option");
  //https://electrictoolbox.com/javascript-add-options-html-select/
  //boucle for pour récupérer les options des lentilles
  for (i in article.lenses) {
    select[select.length] = new Option(
      article.lenses[i],
      article.lenses[i],
      i++
    );
  }

  // var select = document.getElementById("example-select");
  // for (index in example_array) {
  //   select.options[select.options.length] = new Option(
  //     example_array[index],
  //     index
  //   );
  // }
  // let newOption = new Option(article.lenses, article.lenses);
  // document.getElementById("article__option").add(newOption);

  // console.log(newOption);
};
// myFunction = (selTag) => {
//   selTag.options[selTag.selectedIndex].text;
//   cardObject.add(document.getElementById("article__title").text);
// };
const nameDisplay = async () => {
  await fetchDescription();
};
nameDisplay();




function bouton() {
let test = [];
cardObject.push(getArticle(articleId));
this.test = cardObject;
console.log(cardObject);
localStorage.setItem('supercart', this.cardObject.Promise);
// localStorage.cart = JSON.stringify(cardObject);
// console.log(localStorage.getItem("cart"));  
}



// document.getElementById("button").addEventListener("click", () => {
//   nameDisplay();

//   // localStorage.test = JSON.stringify(descriptionData);
//   // cardObject.option = document.getElementById("article__option").value;
//   // cardObject.quantity = +document.getElementById("quantity").value;
  

//   cardObject.push(getArticle(articleId));
//   console.log(cardObject);
//   localStorage.cart = JSON.stringify(cardObject);

//   // window.location.href = "cart.html";
// });

// const articleDisplay = async () => {
//     await fetchDescription();

//     document.getElementById("article__option").innerHTML = articleOption
//       .map(
//           (option) =>
//             `
//             <option value="${option.lenses}">${option.lenses}</option>
//           `
//         )
//         .join(""); //enlever séparateur ","
//     };

//     articleDisplay();
//   };
// const myHeaders = new Headers();

// const init = {
//   method: "POST",
//   header: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//   pseudo: "caca",
//   message: "caca",
// }),
//   mode:"cors",
//   credentials: "same-origin",
// };

// console.log(myHeaders);
//  main.js

// POST request using fetch()

//   fetch("http://localhost:3000/api/cameras/", {
//   // Adding method type
//   method: "POST",

//   // Adding body or contents to send
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),

//   // Adding headers to the request
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   // Converting to JSON
//   .then((response) => response.json())

//   // Displaying results to console
//   .then((json) => console.log(json));
// });

// (async () => {
//   const rawResponse = await fetch("http://localhost:3000/api/cameras/order", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ a: 1, b: "Textual content" }),
//   });

//   const content = await rawResponse.json();

//   console.log(content);
// })();
