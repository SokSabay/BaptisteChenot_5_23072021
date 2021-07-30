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
      return articles;
    });
}

// Afficher les informations de l'article
function hydrateArticle(article) {
  document.getElementById("article__title").textContent = article.name;
  document.getElementById("article__price").textContent = article.price;
  document.getElementById("article__description").textContent = article.description;
  document.getElementById("imgID").src = article.imageUrl;
}
