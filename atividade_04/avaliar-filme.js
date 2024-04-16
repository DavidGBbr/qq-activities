/*Implemente um algoritmo que permita aos usuários avaliar vários filmes. Para cada filme, o
usuário deve inserir o nome do filme e uma nota de 1 a 5. O sistema deve armazenar essas
avaliações e, no final, exibir uma lista dos filmes avaliados, ordenados da maior para a menor
nota. 
*/

//Classifica os filmes dados pelo usuário
function rateFilm() {
  const movies = [];

  while (true) {
    const name = prompt("Digite o nome do filme (ou 'fim' para encerrar)");
    if (name.toLowerCase() === "fim") {
      break;
    }

    const rate = parseInt(
      prompt(`Digite uma nota de 1 a 5 para o filme ${name}: `)
    );
    if (isNaN(rate) || rate < 1 || rate > 5) {
      alert("Por favor, digite uma nota válida de 1 a 5.");
      continue;
    }

    movies.push({ nome: name, nota: rate });
  }

  return movies;
}

//Mostra os filmes já classificados
function showMovies(movies) {
  movies.sort((a, b) => b.nota - a.nota);

  console.log("Filmes Avaliados:");
  movies.forEach((movie, i) => {
    console.log(`${i + 1}.${movie.nome} - ${movie.nota}`);
  });
}

function main() {
  const movies = rateFilm();
  showMovies(movies);
}

main();
