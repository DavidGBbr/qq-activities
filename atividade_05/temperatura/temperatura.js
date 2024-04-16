const days = [];

document
  .getElementById("addTemperatureBtn")
  .addEventListener("click", addDayTemperature);

document
  .getElementById("showMonitoringBtn")
  .addEventListener("click", showMonitoring);

function addDayTemperature() {
  if (days.length < 7) {
    const temperature = parseFloat(
      document.getElementById("temperature").value
    );

    days.push({ day: days.length, temperature });
    showMessage(`Temperatura máxima do dia ${days.length} registrada!`);
  } else {
    showMessage("A quantidade máxima de dias é de 7!");
  }
  document.getElementById("temperature").value = "";
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  setTimeout(() => {
    messageElement.innerHTML = "";
  }, 3000);
}

function showMonitoring() {
  const monitoringDiv = document.getElementById("showMonitoring");

  let max = maxTemperature();
  let min = minTemperature();

  monitoringDiv.innerHTML = `
  <p>Temperatura média: ${averageTemperature().toFixed(2)}°C</p>
  <p>Maior temperatura: ${max.temperature}°C no dia ${max.day}</p>
  <p>Menor temperatura: ${min.temperature}°C no dia ${min.day}</p>
  `;
}

//retorna a média das temperaturas da semana
function averageTemperature() {
  let sum = 0;

  for (let i = 0; i < days.length; i++) {
    sum += days[i].temperature;
  }

  return sum / days.length;
}

// Retorna o dia com maior temperatura
function maxTemperature() {
  return days.reduce(
    (max, current) => (max.temperature > current.temperature ? max : current),
    days[0]
  );
}

// Retorna o dia com menor temperatura
function minTemperature() {
  return days.reduce(
    (min, current) => (min.temperature < current.temperature ? min : current),
    days[0]
  );
}
