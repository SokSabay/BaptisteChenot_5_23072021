// fetch("http://localhost:3000/api/cameras")
//   .then((res) => res.text())
//   .then((data) =>console.log(data));

//   const init = {
//       method : "GET",
//       headers : myHeaders,
//       mode: "cors,"
//   }
// const IMG = document.getElementById("IMG");
// let monIMG;
// function getIMG() {
//   fetch("http://localhost:3000/api/cameras")
//     .then((res) => res.json())
//     .then((data) => {
//       let myIMG = data[3].imageUrl;
//       console.log(data);

//       IMG.innerHTML = `<img src="${myIMG}" alt="">`;
//     });
// }
// getIMG();

fetch("http://localhost:3000/api/cameras").then((res) => res.json());

const init = {
  method: "GET",
  mode: "cors",
};

fetch("http://localhost:3000/api/cameras", init).then((res) =>
  console.log(res)
);
//CRUD => Create (POST), read (GET), update (PUT), Delet (DELETE)
// deux fonctions : local storage pour le panier les paramètres le requête de l'URL pour la page produit
// Plan de test
