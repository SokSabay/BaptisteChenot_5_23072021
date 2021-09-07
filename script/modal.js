//Stock l'arrière plan du pop up
var modal = document.getElementById("myModal");

// Stocke le bouton qui permet d'ouvrir le pop up
var btn = document.getElementById("buttonAdd");

// stock le <span> qui permet de fermer le pop up
var span = document.getElementsByClassName("close")[0];

// Quand l'utilisateur clique sur le bouton ca ouvre le pop up
btn.onclick = function () {
  modal.style.display = "block";
};

// Quand l'utilisateur clique sur la croix ca ferme le popup
span.onclick = function () {
  modal.style.display = "none";
};

// Quand l'utilisateur clique en dehors de la fenêtre elle se ferme
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//Si l'utilisateur clique sur mon panier la page cart.html s'ouvre
document.getElementById("panier").addEventListener("click", () => {
  window.location.href = "cart.html";
});
//Si l'utilisateur clique sur continuer mes achats la page index.html s'ouvre
document.getElementById("achats").addEventListener("click", () => {
  window.location.href = "index.html";
});
