function manageExpenses() {
  let expenses = [];

  while (true) {
    let type = prompt(`Digite o tipo de gasto (ou 'fim' para encerrar):`);

    if (type.toLowerCase() === "fim") {
      break;
    }
    let amount = parseFloat(prompt(`Digite o valor do gasto:`));

    expenses.push({ type, amount });
  }

  return expenses;
}

function calculateTotalExpense(expenses) {
  let totalExpense = 0;

  for (let i = 0; i < expenses.length; i++) {
    totalExpense += expenses[i].amount;
  }

  return totalExpense;
}

function calculateAverageExpensePerCategory(expenses) {
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

function main() {
  let expenses = manageExpenses();
  let totalExpense = calculateTotalExpense(expenses);
  let averageExpensePerCategory = calculateAverageExpensePerCategory(expenses);

  console.log(`
  Total gasto: R$ ${totalExpense.toFixed(2)}
  Gasto médio por categoria:`);

  for (let type in averageExpensePerCategory) {
    console.log(`${type}: R$ ${averageExpensePerCategory[type].toFixed(2)}`);
  }
}

main();
