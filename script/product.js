(async function () {
  const articleId = getArticleId();
  console.log(articleId);
  const article = await getArticle(articleId);
  console.log(article);
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
      console.log(articleOption);
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
  console.log(article.lenses);

  const select = document.getElementById("article__option");
  //https://electrictoolbox.com/javascript-add-options-html-select/
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

// const articleDisplay = async () => {
//   await fetchDescription();

//   document.getElementById("article__option").innerHTML = articleOption
//     .map(
//       (option) =>
//         `
//         <option value="${option.lenses}">${option.lenses}</option>
//       `
//     )
//     .join(""); //enlever séparateur ","
// };
// articleDisplay();
