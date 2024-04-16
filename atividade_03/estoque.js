/*Você foi contratado por uma loja de varejo para desenvolver um sistema que ajude a
equipe de estoque a categorizar produtos de acordo com o preço. Com isso, facilita a
classificação na gestão de estoque e na estratégia de vendas. As categorias são definidas
da seguinte forma:
Categoria A: Produtos com preço maior que R$ 1000.
Categoria B: Produtos com preço entre R$ 501 e R$ 1000.
Categoria C: Produtos com preço entre R$ 101 e R$ 500.
Categoria D: Produtos com preço entre R$ 51 e R$ 100.
Categoria E: Produtos com preço até R$ 50.
Crie um algoritmo que calcule o preço com desconto de um produto, considerando
diferentes faixas de desconto.
Requisitos do Sistema:
O sistema deve solicitar ao usuário o número total de produtos que ele deseja classificar.
Para cada produto, o sistema deve solicitar ao usuário que insira o preço do produto.
Com base no preço inserido, o sistema deve classificar cada produto em uma das
categorias de "A" a "E".
Após classificação do produto cada, o sistema deve exibir uma categoria correspondente
juntamente com o preço do produto.
Todos os preços e categorias dos produtos devem ser listados ao final da execução do
programa. */

function classificarProduto(preco) {
  if (preco > 1000) {
    return "Categoria A";
  } else if (preco >= 501 && preco <= 1000) {
    return "Categoria B";
  } else if (preco >= 101 && preco <= 500) {
    return "Categoria C";
  } else if (preco >= 51 && preco <= 100) {
    return "Categoria D";
  } else {
    return "Categoria E";
  }
}

function calcularPrecoComDesconto(preco) {
  if (preco > 1000) {
    return preco * 0.8;
  } else if (preco >= 501 && preco <= 1000) {
    return preco * 0.85;
  } else {
    return preco * 0.9;
  }
}

function main() {
  const numeroProdutos = parseInt(prompt("Digite o número total de produtos:"));
  const produtos = [];

  for (let i = 0; i < numeroProdutos; i++) {
    const preco = parseFloat(prompt(`Digite o preço do produto ${i + 1}:`));
    const categoria = classificarProduto(preco);
    const precoComDesconto = calcularPrecoComDesconto(preco);
    produtos.push({ preco, categoria, precoComDesconto });
  }

  console.log("Produtos:");
  produtos.forEach((produto, index) => {
    console.log(`Produto ${index + 1}:`);
    console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
    console.log(`Categoria: ${produto.categoria}`);
    console.log(
      `Preço com desconto: R$ ${produto.precoComDesconto.toFixed(2)}`
    );
    console.log("----------------------");
  });
}

main();
