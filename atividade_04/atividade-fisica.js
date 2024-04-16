function trackActivities() {
  let activities = [];

  for (let i = 0; i < 7; i++) {
    const type = prompt(`Digite o tipo de atividade para o dia ${i + 1}:`);
    const minutes = parseInt(
      prompt("Digite a quantidade em minutos da atividade:")
    );

    activities.push({
      day: i + 1,
      type,
      minutes,
    });
  }
  return activities;
}

function calcTotalTime(activities) {
  let totalTime = 0;

  for (let i = 0; i < activities.length; i++) {
    totalTime += activities[i].minutes;
  }

  return totalTime;
}

function calcAverageTime(activities) {
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

function main() {
  let activities = trackActivities();
  let totalTime = calcTotalTime(activities);
  let averageTime = calcAverageTime(activities);

  console.log(`Tempo total de atividades: ${totalTime} minutos`);
  console.log(`Tempo médio por tipo de esporte:`);
  for (let type in averageTime) {
    console.log(`${type} - ${averageTime[type].toFixed(2)} minutos`);
  }
}

main();
