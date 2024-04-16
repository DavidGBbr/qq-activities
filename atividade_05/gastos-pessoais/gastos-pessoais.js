const expenses = [];

document.getElementById("addExpenseBtn").addEventListener("click", addExpense);
document
  .getElementById("showExpensesBtn")
  .addEventListener("click", showExpenses);

function addExpense() {
  const type = document.getElementById("type").value;
  const amount = parseFloat(document.getElementById("amount").value);

  expenses.push({ type, amount });
  showMessage("Gasto adicionado com sucesso!");
  document.getElementById("type").value = "";
  document.getElementById("amount").value = "";
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  setTimeout(() => {
    messageElement.innerHTML = "";
  }, 3000);
}

function calculateTotalExpense() {
  let totalExpense = 0;

  for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i].amount;
  }

  return totalExpense;
}

function calculateAverageExpensePerCategory() {
  let categories = {};
  let count = {};

  for (let i = 0; i < expenses.length; i++) {
    let type = expenses[i].type;
    let amount = expenses[i].amount;

    if (!categories[type]) {
      categories[type] = amount;
      count[type] = 1;
    } else {
      categories[type] += amount;
      count[type]++;
    }
  }

  let averageExpensePerCategory = {};
  for (let type in categories) {
    averageExpensePerCategory[type] = categories[type] / count[type];
  }

  return averageExpensePerCategory;
}

function showExpenses() {
  let totalExpense = calculateTotalExpense();
  let averageExpensePerCategory = calculateAverageExpensePerCategory();

  const expensesDiv = document.getElementById("showExpenses");
  expensesDiv.innerHTML = "";

  if (expenses.length === 0) {
    showMessage("Nenhum gasto adicionado ainda.");
  } else {
    expensesDiv.innerHTML = "<h2>Gastos adicionados</h2>";
    expensesDiv.innerHTML += `<p>Total gasto: R$ ${totalExpense.toFixed(
      2
    )}</p>`;
    expensesDiv.innerHTML += `<p>Gasto médio por categoria:</p>`;

    for (let type in averageExpensePerCategory) {
      expensesDiv.innerHTML += `<p>${type}: R$ ${averageExpensePerCategory[
        type
      ].toFixed(2)}</p>`;
    }
  }
}
