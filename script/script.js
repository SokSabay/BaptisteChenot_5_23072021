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

// const TXT = document.getElementById("TXT");
// let monTXT;
// function getTXT() {
//   fetch("http://localhost:3000/api/cameras")
//     .then((res) => res.json())
//     .then((data) => {
//       let myTXT = data[3].name;
//       console.log(data[3].name);

//       TXT.innerHTML = `${myTXT}`;
//     });
// }
// getTXT();

// fetch("http://localhost:3000/api/cameras").then((res) => res.json());

// const init = {
//   method: "GET",
//   mode: "cors",
// };

// fetch("http://localhost:3000/api/cameras", init).then((res) =>
//   console.log(res)
// );
//CRUD => Create (POST), read (GET), update (PUT), Delet (DELETE)
// deux fonctions : local storage pour le panier les paramètres le requête de l'URL pour la page produit
// Plan de test


//Création d'un tableau pour contenir les infos de l'API
let descriptionData = [];

//Pour aller chercher les infos de l'API et les mettres dans le tableau
const fetchDescription = async () => {
  await fetch("http://localhost:3000/api/cameras")
    .then((res) => res.json())
    .then((data) => (descriptionData = data));

  console.log(descriptionData);
};
//Fonction pour écrire les infos dans le code html
const nameDisplay = async () => {
  await fetchDescription();

  document.getElementById("cardContener").innerHTML = descriptionData
    .map(
      (user) =>
        `
    <div class="card">
      <img src="${user.imageUrl}" alt="photo" />
      <h3>${user.name}</h3>
      <p>${user.price}<p>
      <p>${user.description}<p>
    </div>
  `
    )
    .join("");
};

nameDisplay();
