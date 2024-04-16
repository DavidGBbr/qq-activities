//Desenvolva um conversor que transforme um número decimal em binário.

function decimalParaBinario(decimal) {
  if (decimal === 0) {
    return "0";
  }

  let binario = "";

  while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
  }

  return binario;
}

function mostrarBinarios() {
  let numeros = parseFloat(
    prompt("Digite quantos decimais você deseja converter: ")
  );

  for (let i = 1; i <= numeros; i++) {
    let decimal = parseFloat(prompt(`Digite ${i}° número decimal: `));
    let binario = decimalParaBinario(decimal);
    alert(`O valor binário de ${decimal} é ${binario}`);
  }
}

mostrarBinarios();
