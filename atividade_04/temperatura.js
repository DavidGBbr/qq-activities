function dayTemperature() {
  let days = [];

  for (let i = 0; i < 7; i++) {
    let temperature = prompt(`Digite a temperatura máxima do dia ${i + 1}:`);
    days.push({ day: i + 1, temperature: parseFloat(temperature) });
  }

  return days;
}

// Função que retorna a média de temperatura dos dias da semana
function averageTemperature(days) {
  let sum = 0;

  for (let i = 0; i < days.length; i++) {
    sum += days[i].temperature;
  }

  return sum / days.length;
}

// Retorna o dia com maior temperatura
function maxTemperature(days) {
  return days.reduce(
    (max, current) => (max.temperature > current.temperature ? max : current),
    days[0]
  );
}

// Retorna o dia com menor temperatura
function minTemperature(days) {
  return days.reduce(
    (min, current) => (min.temperature < current.temperature ? min : current),
    days[0]
  );
}

function main() {
  let days = dayTemperature();
  let max = maxTemperature(days);
  let min = minTemperature(days);

  console.log(`
  Temperatura média: ${averageTemperature(days).toFixed(2)}°C
  Maior temperatura: Dia ${max.day}, ${max.temperature}°C
  Menor temperatura: Dia ${min.day}, ${min.temperature}°C
  `);
}

main();
