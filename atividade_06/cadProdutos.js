const products = [];

document.getElementById("addProductBtn").addEventListener("click", addProduct);
document
  .getElementById("listProductsBtn")
  .addEventListener("click", listProducts);
document
  .getElementById("searchProductBtn")
  .addEventListener("click", searchProduct);

function addProduct() {
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );
  const productCategory = document.getElementById("productCategory").value;

  const product = {
    name: productName,
    price: productPrice,
    category: productCategory,
  };

  products.push(product);

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productCategory").value = "";

  showMessage("Produto cadastrado com sucesso!");
}

function listProducts() {
  const listProductsDiv = document.getElementById("listProducts");
  listProductsDiv.innerHTML = "";

  if (products.length === 0) {
    showMessage("Nenhum produto cadastrado ainda.");
  } else {
    listProductsDiv.innerHTML = "<h2>Produtos Cadastrados:</h2>";
    const ul = document.createElement("ul");
    products.map((product) => {
      const li = document.createElement("li");
      li.textContent = `Nome: ${product.name}, Preço: R$${product.price}, Categoria: ${product.category}`;
      ul.appendChild(li);
    });
    listProductsDiv.appendChild(ul);
  }
}

function searchProduct() {
  const searchQuery = document
    .getElementById("searchProduct")
    .value.trim()
    .toLowerCase();

  //filtramos nosso array com base no que recebemos no input de busca
  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery);
  });

  const listProductsDiv = document.getElementById("listProducts");
  listProductsDiv.innerHTML = "";

  if (filteredProducts.length === 0) {
    showMessage("Nenhum produto encontrado.");
  } else {
    listProductsDiv.innerHTML = "<h2>Produtos Encontrados:</h2>";
    const ul = document.createElement("ul");
    filteredProducts.map((product) => {
      const li = document.createElement("li");
      li.textContent = `Nome: ${product.name}, Preço: R$${product.price}, Categoria: ${product.category}`;
      ul.appendChild(li);
    });
    listProductsDiv.appendChild(ul);
  }
}

function showMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  setTimeout(() => {
    messageDiv.textContent = "";
  }, 3000);
}
