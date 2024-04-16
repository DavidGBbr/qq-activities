let chances;
let targetNumber;

//seleção de elementos mais usados
const messageElement = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const attemptsLeft = document.getElementById("attemptsLeft");

document.getElementById("guessForm").addEventListener("submit", start);
restartBtn.addEventListener("click", newGame);
document
  .getElementById("showGuessesBtn")
  .addEventListener("click", listGuesses);

//reseta todo o jogo para nova partida
function newGame() {
  chances = []; //inicia a array de chances vazia
  targetNumber = Math.floor(Math.random() * 100 + 1); //gera um número aleatorio entre 1 e 100
  guessBtn.disabled = false;
  restartBtn.style = "display:none";
  guessInput.value = "";
  guessInput.focus();
  messageElement.innerText = "";
  attemptsLeft.innerText = 5;
}

function start() {
  console.log(targetNumber);
  event.preventDefault();
  const guessNumber = parseInt(guessInput.value);
  const numberPlayed = chances.filter(
    (chance) => chance === guessNumber
  ).length;

  //Caso o jogador ainda possua tentativas, insere o palpite
  if (chances.length < 5) {
    chances.push(guessNumber);
  }

  //Verifica se o número já foi jogado
  if (numberPlayed === 1) {
    showMessage(`Você já inseriu o número ${guessNumber}`, false);
    chances.pop();
    guessInput.value = "";
    return;
  }

  //Verifica se o jogador esgotou as suas chances
  if (5 - chances.length === 0) {
    showMessage(`Você perdeu, o número sorteado era ${targetNumber}!`, false);
    guessInput.value = "";
    guessBtn.disabled = true;
    restartBtn.style = "display:inline";
    attemptsLeft.innerText = 0;
    return;
  }

  if (guessNumber === targetNumber) {
    showMessage(
      `Você venceu com apenas ${5 - (5 - chances.length)} tentativas!`,
      true
    );
    guessBtn.disabled = true;
    restartBtn.style = "display:inline";
  } else {
    showMessage(
      `O número alvo é ${targetNumber > guessNumber ? "maior" : "menor"}!`,
      false
    );
  }

  guessInput.value = "";
  attemptsLeft.innerText = 5 - chances.length;
}

//Faz a listagem dos números já jogados
function listGuesses() {
  if (chances.length === 0) return;
  const guessesDiv = document.getElementById("guesses");
  const h2 = document.createElement("h2");
  h2.textContent = "Você jogou os números:";
  const ul = document.createElement("ul");
  ul.innerHTML = "";
  chances.map((guess, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}º palpite foi ${guess}`;
    ul.appendChild(li);
  });
  guessesDiv.appendChild(h2);
  guessesDiv.appendChild(ul);

  setTimeout(() => {
    guessesDiv.textContent = "";
  }, 4000);
}

function showMessage(message, win) {
  messageElement.style.color = win ? "green" : "red";
  messageElement.textContent = message;
  if (!win) {
    setTimeout(() => {
      messageElement.textContent = "";
    }, 3000);
  }
}

newGame();
