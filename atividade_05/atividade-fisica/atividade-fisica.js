const activities = [];

document
  .getElementById("addActivityBtn")
  .addEventListener("click", trackActivities);

document
  .getElementById("showTrackingBtn")
  .addEventListener("click", showTracking);

function trackActivities() {
  if (activities.length < 7) {
    const type = document.getElementById("type").value;
    const minutes = parseFloat(document.getElementById("duration").value);

    const activity = {
      day: activities.length + 1,
      type,
      minutes,
    };

    activities.push(activity);
    showMessage(`Atividade do dia ${activity.day} adicionada com sucesso!`);
  } else {
    showMessage("Você já adicionou 7 atividades!");
  }

  document.getElementById("type").value = "";
  document.getElementById("duration").value = "";
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  setTimeout(() => {
    messageElement.innerHTML = "";
  }, 3000);
}

function calcTotalTime() {
  let totalTime = 0;

  for (let i = 0; i < activities.length; i++) {
    totalTime += activities[i].minutes;
  }

  return totalTime;
}

function calcAverageTime() {
  let totalTimePerType = {};
  let countPerType = {};

  for (let i = 0; i < activities.length; i++) {
    let type = activities[i].type;
    let duration = activities[i].minutes;

    if (!totalTimePerType[type]) {
      totalTimePerType[type] = 0;
      countPerType[type] = 0;
    }

    totalTimePerType[type] += duration;
    countPerType[type]++;
  }

  let averageTimePerType = {};

  for (let type in totalTimePerType) {
    averageTimePerType[type] = totalTimePerType[type] / countPerType[type];
  }

  return averageTimePerType;
}

function showTracking() {
  const trackingDiv = document.getElementById("showTracking");
  console.log(activities);

  let totalTime = calcTotalTime();
  let averageTime = calcAverageTime();

  let trackingHTML = `Tempo total de atividades: ${totalTime} minutos<br>`;
  trackingHTML += "Tempo médio por tipo de atividade:<br>";

  for (let type in averageTime) {
    trackingHTML += `${type} - ${averageTime[type].toFixed(2)} minutos<br>`;
  }
  trackingDiv.innerHTML = trackingHTML;
}
