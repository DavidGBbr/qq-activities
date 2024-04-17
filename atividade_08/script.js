document
  .getElementById("formClient")
  ?.addEventListener("submit", registerClient);
document
  .getElementById("sellerForm")
  ?.addEventListener("submit", registerSeller);
document
  .getElementById("productForm")
  ?.addEventListener("submit", registerProduct);

function registerClient(event) {
  event.preventDefault();
  const clientName = document.getElementById("clientName").value;
  const birthDate = document.getElementById("birthDate").value;
  const cpf = document.getElementById("cpf").value;
  const origin = document.getElementById("origin").value;
  const score = document.getElementById("score").value;

  const client = {
    name: clientName,
    birthDate: birthDate,
    cpf: cpf,
    origin: origin,
    score: score,
  };

  saveLocalStorage("clients", client);
  event.target.reset();
}

function registerSeller(event) {
  event.preventDefault();
  const sellerName = document.getElementById("sellerName").value;
  const registration = document.getElementById("registration").value;

  const seller = {
    name: sellerName,
    registration: registration,
  };

  saveLocalStorage("sellers", seller);
  event.target.reset();
}

function registerProduct(event) {
  event.preventDefault();
  const productName = document.getElementById("productName").value;
  const value = document.getElementById("value").value;
  const category = document.getElementById("category").value;

  const product = {
    name: productName,
    value: value,
    category: category,
  };

  saveLocalStorage("products", product);
  event.target.reset();
}

function saveLocalStorage(key, value) {
  let list = JSON.parse(localStorage.getItem(key)) || [];
  list.push(value);
  localStorage.setItem(key, JSON.stringify(list));
}
