function calcularConsumoMedio(quilometros, combustivel) {
  return quilometros / combustivel;
}

function classificarVeiculos(veiculos) {
  veiculos.sort((a, b) => a.consumoMedio - b.consumoMedio);

  console.log("Veículos classificados por consumo médio:");
  veiculos.forEach((veiculo, indice) => {
    console.log(
      `${indice + 1}. ${veiculo.nome}: ${veiculo.consumoMedio.toFixed(2)} km/l`
    );
  });
}

function calcularConsumoVeiculos() {
  let veiculos = [];
  let continuar = true;

  while (continuar) {
    let nome = prompt("Digite o nome do veículo:");
    let quilometros = parseFloat(
      prompt(
        `Digite a quantidade de quilômetros percorridos pelo veículo ${nome}:`
      )
    );
    let combustivel = parseFloat(
      prompt(
        `Digite a quantidade de combustível consumido pelo veículo ${nome} (em litros):`
      )
    );

    let consumoMedio = calcularConsumoMedio(quilometros, combustivel);

    veiculos.push({ nome, consumoMedio });

    continuar = confirm("Deseja inserir outro veículo?");
  }

  classificarVeiculos(veiculos);
}

calcularConsumoVeiculos();
