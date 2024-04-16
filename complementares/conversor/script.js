/*Implemente um conversor de moedas que converta um valor digitado pelo usuário de Real para Dólar, Euro, ou outra moeda de sua escolha, considerando uma taxa de conversão fixa.
 */

function conversor(valor, cotacao) {
  return `Com o montante de ${valor.toFixed(
    2
  )} e a cotação de ${cotacao.toFixed(2)}, o valor convertido é de ${(
    valor / cotacao
  ).toFixed(2)}`;
}

function mostrarConversoes(quantidade) {
  for (let i = 0; i < quantidade; i++) {
    let valor = parseFloat(prompt("Digite o valor do montante: "));
    let cotacao = parseFloat(prompt("Digite a cotação: "));
    alert(conversor(valor, cotacao));
  }
}

let quantidade = parseInt(
  prompt("Qual a quantidade de conversões que você deseja fazer?")
);
mostrarConversoes(quantidade);
