let cardObject = new Array();
var articleId = 0;
(async function () {
  articleId = getArticleId();
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
  document.getElementById("article__price").textContent = convertPrice(
    article.price
  );
  document.getElementById("article__description").textContent =
    article.description;
  document.getElementById("imgID").src = article.imageUrl;

  cardObject = article;

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
};


document.getElementById("buttonAdd").addEventListener("click", () => {
  stockage();

  // window.location.href = "cart.html";
});

document.getElementById("panier").addEventListener("click", () => {
  window.location.href = "cart.html";
});
document.getElementById("achats").addEventListener("click", () => {
  window.location.href = "index.html";
});