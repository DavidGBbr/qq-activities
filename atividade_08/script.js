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
  showLocalStorageData("clients");
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
  showLocalStorageData("sellers");
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
  showLocalStorageData("products");
  event.target.reset();
}

function saveLocalStorage(key, value) {
  let list = JSON.parse(localStorage.getItem(key)) || [];
  list.push(value);
  localStorage.setItem(key, JSON.stringify(list));
}

function showLocalStorageData(key) {
  const data = JSON.parse(localStorage.getItem(key));
  const container = document.getElementById("listData");
  container.innerHTML = "";

  if (data && data.length > 0) {
    const table = document.createElement("table");
    table.classList.add("data-table");

    // Cria o cabeçalho da tabela
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    // Adiciona os nomes das colunas
    Object.keys(data[0]).forEach((columnName) => {
      const th = document.createElement("th");
      th.textContent = columnName;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Cria o corpo da tabela
    const tbody = document.createElement("tbody");
    data.forEach((item) => {
      const row = document.createElement("tr");
      Object.values(item).forEach((value) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    container.appendChild(table);
  } else {
    container.textContent = "Nenhum dado encontrado.";
  }
}
