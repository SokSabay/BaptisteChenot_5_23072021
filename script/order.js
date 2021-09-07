function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}
document.getElementById("UUID").textContent = getArticleId();


// document.getElementById("total").innerHTML = localStorage.getItem('contact'); 

let fName = JSON.parse(window.localStorage.getItem("order"));
fName = fName.contact.firstName;


document.getElementById("firstName").innerHTML = fName; 
document.getElementById("priceTotal").innerHTML = convertPrice(totalPrice()); 

over.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});