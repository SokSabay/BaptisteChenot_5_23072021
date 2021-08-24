function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}
document.getElementById("UUID").textContent = getArticleId()
  
;
// // const test = async () => {
// //   await fetch("http://localhost:3000/api/cameras/order", {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     body: {
// //       username: "admin",
// //       password: "1234",
// //     },
// //   })
// //     .then((res) => res.json())
// //     .then(console.log);
// // };
// // test();

// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });

// const myForm = document.getElementById("myForm");
// console.log(myForm);

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   // const formData = new FormData(myForm);
//   // console.log(formData);
//   let formData = {
//     Prenom: "fsfs",
//     nom: "ninja",
//   };
//   fetch("http://localhost:3000/api/cameras/order", {
//     method: "POST",
//     body: JSON.stringify(formData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (text) {
//       console.log(text);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// });
// let data = {
//   contact: {
//     firstName: new URL(window.location.href).searchParams.get("prenom"),
//     lastName: new URL(window.location.href).searchParams.get("nom"),
//     address: new URL(window.location.href).searchParams.get("adresse"),
//     city: new URL(window.location.href).searchParams.get("ville"),
//     email: new URL(window.location.href).searchParams.get("email"),
//   },
//   products: ids,
// };
// console.log(data);
