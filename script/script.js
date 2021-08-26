//Création d'un tableau pour contenir les infos de l'API
let descriptionData = [];

const fetchDescription = async () => {
  await fetch("http://localhost:3000/api/cameras")
    .then((res) => res.json())
    .then((data) => (descriptionData = data));
 
};

// const myImage = document.querySelector(".img");
//Pour aller chercher les infos de l'API et les mettres dans le tableau

//Fonction pour écrire les infos dans le code html
const nameDisplay = async () => {
  await fetchDescription();
  console.log(descriptionData);
  document.getElementById("cardContener").innerHTML = descriptionData
    .map(
      (user) =>
        `
    <a  href="product.html?id=${user._id}" class="card box" >
    
      <img class="noFlex" src="${user.imageUrl}" alt="photo" />
      <div>
        <h3>${user.name}</h3>
        <p>Prix : ${user.price} €<p>
        <p>${user.description}<p>
      </div>  
    </a>
  `
    )
    .join(""); //enleve séparateur ","
};

nameDisplay();
