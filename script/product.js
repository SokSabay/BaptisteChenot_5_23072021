let cardObject = new Array();
var articleId = 0;

// retourne l'id contenu dans le lien
const getArticleId = () => {
  return new URL(location.href).searchParams.get("id");
};

// Récupere l'API par rapport à son ID contenu dans le lien

const getArticle = async () => {
  await fetch(`http://localhost:3000/api/cameras/${getArticleId()}`)
    .then((res) => res.json())
    .then((data) => (articleOption = data));
};

// Afficher les informations de l'article
const hydrateArticle = async () => {
  await getArticle();

  document.getElementById("article__title").textContent = articleOption.name;
  document.getElementById("article__price").textContent = convertPrice(
    articleOption.price
  );
  document.getElementById("article__description").textContent =
    articleOption.description;
  document.getElementById("imgID").src = articleOption.imageUrl;
  document.title = `Orinoco | ${articleOption.name}`;
  cardObject = articleOption;

  const select = document.getElementById("article__option");
  //https://electrictoolbox.com/javascript-add-options-html-select/
  //boucle for pour récupérer les options des lentilles
  for (i in articleOption.lenses) {
    select[select.length] = new Option(
      articleOption.lenses[i],
      articleOption.lenses[i],
      i++
    );
  }
};
hydrateArticle();

document.getElementById("buttonAdd").addEventListener("click", () => {
  stockage();
});
