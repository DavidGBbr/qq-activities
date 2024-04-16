// Você está desenvolvendo um aplicativo para um restaurante que deseja incentivar seus
// clientes a deixar gorjetas apenas para os garçons, baseando-se no total da conta e na
// percepção da qualidade do serviço. O aplicativo calcula o valor da gorjeta usando as
// seguintes diretrizes:
// Excelente serviço: gorjeta de 20% sobre o total da conta.
// Bom serviço: gorjeta de 15% sobre o total da conta.
// Serviço médio: gorjeta de 10% sobre o total da conta.
// Serviço ruim: gorjeta de 5% sobre o total da conta.
// Requisitos do Sistema:
// O sistema deve solicitar ao usuário o valor total da conta.
// Em seguida, deve perguntar ao usuário como ele está disponível o serviço, oferecendo
// as opções de "Excelente", "Bom", "Médio" ou "Ruim".
// Com base na avaliação da qualidade do serviço, o sistema calcula o percentual de gorjeta
// correspondente.
// O sistema deve então calcular o valor do gorjeta e exibir tanto o valor da gorjeta quanto
// o valor total da conta com o gorjeta incluído.
// Saída Esperada:
// O sistema deve informar ao usuário o percentual da gorjeta com base na avaliação do
// serviço e o valor total a ser pago, incluindo a gorjeta.

function calcularGorjeta(totalConta, qualidadeServico) {
  let percentualGorjeta;

  switch (qualidadeServico) {
    case 1:
      percentualGorjeta = 0.2;
      break;
    case 2:
      percentualGorjeta = 0.15;
      break;
    case 3:
      percentualGorjeta = 0.1;
      break;
    case 4:
      percentualGorjeta = 0.05;
      break;
    default:
      console.log("Opção inválida!");
      return;
  }

  const gorjeta = totalConta * percentualGorjeta;
  const totalComGorjeta = totalConta + gorjeta;

  return { gorjeta, totalComGorjeta };
}

function main() {
  const totalConta = parseFloat(prompt("Digite o valor total da conta:"));
  const qualidadeServico = parseFloat(
    prompt("Como foi o serviço? (1 - Excelente/ 2 - Bom/ 3 - Médio/ 4 - Ruim)")
  );

  let qualidade = [
    { id: 1, valor: "Excelente" },
    { id: 2, valor: "Bom" },
    { id: 3, valor: "Médio" },
    { id: 4, valor: "Ruim" },
  ];

  const resultado = calcularGorjeta(totalConta, qualidadeServico);

  if (resultado) {
    console.log(
      `Percentual de gorjeta (${
        qualidade[qualidadeServico - 1].valor
      }): ${resultado.gorjeta.toFixed(2)}%`
    );
    console.log(
      `Total a ser pago (com gorjeta): R$ ${resultado.totalComGorjeta.toFixed(
        2
      )}`
    );
  }
}

main();
