//Calcula o valor da muta caso tenha peso excedente
function calcularMulta(peso) {
  let pesoLimite = 50;
  let taxaMulta = 4;
  let excesso = 0;
  let multa = 0;

  if (peso > pesoLimite) {
    excesso = peso - pesoLimite;
    multa = excesso * taxaMulta;
  }

  return {
    excesso: excesso,
    multa: multa,
  };
}

function verificarMulta(peso) {
  const resultado = calcularMulta(peso);

  console.log("Excesso de peso: " + resultado.excesso.toFixed(2) + "kg");
  console.log("Multa a ser paga: R$" + resultado.multa.toFixed(2));
}

verificarMulta(60);

//Calcula o salário total e excendente do trabalhador pelo total de horas trabalhadas
function calcularSalario(codigo, horas) {
  let valorHora = 10;
  let valorHoraExtra = 20;
  let excesso;
  let salarioTotal;
  let salarioExcedente;

  if (horas > 50) {
    excesso = horas - 50;
  } else {
    excesso = 0;
  }

  if (horas <= 50) {
    salarioTotal = valorHora * horas;
    salarioExcedente = 0;
  } else {
    salarioTotal = valorHora * 50 + excesso * valorHoraExtra;
    salarioExcedente = excesso * valorHoraExtra;
  }

  return {
    salarioTotal: salarioTotal,
    salarioExcedente: salarioExcedente,
  };
}

function verificarSalario(codigo, horas) {
  const resultado = calcularSalario(codigo, horas);

  console.log("Salário total: R$" + resultado.salarioTotal.toFixed(2));
  console.log("Salário excedente: R$" + resultado.salarioExcedente.toFixed(2));
}

verificarSalario(100, 52);

//Imprime os números ímpares entre o intervalo dado
function gerarNumeroImpar(inicio, fim) {
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

gerarNumeroImpar(100, 200);
