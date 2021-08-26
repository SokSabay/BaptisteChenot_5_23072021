function getArticleId() {
  return new URL(location.href).searchParams.get("id");
}
document.getElementById("UUID").textContent = getArticleId();

over.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index.html";
});
