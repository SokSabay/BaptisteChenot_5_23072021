function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}
document.getElementById("UUID").textContent = getArticleId();


// document.getElementById("total").innerHTML = localStorage.getItem('contact'); 

let test = JSON.parse(window.localStorage.getItem("order"));
test = test.contact.firstName;
console.table(test);

document.getElementById("firstName").innerHTML = test; 
document.getElementById("priceTotal").innerHTML = convertPrice(totalPrice()); 

over.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});