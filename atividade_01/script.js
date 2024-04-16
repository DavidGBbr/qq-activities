function calcularBhaskara() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    document.getElementById("resultadoBhaskara").innerText =
      "Não existem raízes reais";
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById(
      "resultadoBhaskara"
    ).innerText = `Raízes: x1 = ${x1}, x2 = ${x2}`;
  }
}

function gerarFibonacci() {
  const n = parseInt(document.getElementById("numeroN").value);
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  document.getElementById(
    "resultadoFibonacci"
  ).innerText = `Sequência de Fibonacci: ${fibonacci.join(", ")}`;
}

function calcularAreaCirculo() {
  const raio = parseFloat(document.getElementById("raioCirculo").value);
  const area = Math.PI * raio ** 2;
  document.getElementById(
    "resultadoAreaCirculo"
  ).innerText = `Área do Círculo: ${area.toFixed(2)}`;
}

function calcularVelocidadeMedia() {
  const distancia = 50;
  const tempo = 2;
  const velocidadeMedia = distancia / tempo;
  document.getElementById(
    "resultadoVelocidadeMedia"
  ).innerText = `Velocidade Média: ${velocidadeMedia.toFixed(2)} km/h`;
}
