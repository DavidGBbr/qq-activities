function gerarCPF() {
  const cpfParcial = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10)
  );

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += cpfParcial[i] * (10 - i);
  }
  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito > 9) {
    primeiroDigito = 0;
  }

  cpfParcial.push(primeiroDigito);

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += cpfParcial[i] * (11 - i);
  }
  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito > 9) {
    segundoDigito = 0;
  }

  cpfParcial.push(segundoDigito);

  const cpfFormatado = cpfParcial
    .join("")
    .replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");

  return cpfFormatado;
}

const cpf = gerarCPF();
console.log("CPF gerado:", cpf);
