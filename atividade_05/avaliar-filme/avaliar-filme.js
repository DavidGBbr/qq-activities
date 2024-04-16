const movies = [];

document.getElementById("rateBtn").addEventListener("click", rateMovie);
document.getElementById("showMoviesBtn").addEventListener("click", showMovies);

function rateMovie() {
  const name = document.getElementById("name").value;
  const rate = parseInt(document.getElementById("rate").value);

  if (isNaN(rate) || rate < 1 || rate > 5) {
    alert("Por favor, digite uma nota válida de 1 a 5.");
    return;
  }

  const movie = {
    name,
    rate,
  };

  movies.push(movie);

  document.getElementById("name").value = "";
  document.getElementById("rate").value = "";

  showMessage("Filme avaliado com sucesso!");
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
  setTimeout(() => {
    messageElement.innerHTML = "";
  }, 3000);
}

function showMovies() {
  movies.sort((a, b) => b.rate - a.rate);

  const moviesDiv = document.getElementById("showMovies");
  moviesDiv.innerHTML = "";

  if (movies.length === 0) {
    showMessage("Nenhum filme avaliado ainda.");
  } else {
    moviesDiv.innerHTML = "<h2>Filmes avaliados</h2>";
    movies.forEach((movie) => {
      const moviesList = document.createElement("ul");
      moviesList.innerHTML = `<li>Nome:${movie.name} - Nota:${movie.rate}</li>`;
      moviesDiv.appendChild(moviesList);
    });
  }
}
