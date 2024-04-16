//Implemente um simulador de votação para três candidatos e, após a votação, exiba o vencedor

const candidatos = [
  { nome: "Steven", votos: 0 },
  { nome: "Roger", votos: 0 },
  { nome: "Cleber", votos: 0 },
];

const candidato1 = candidatos[0];
const candidato2 = candidatos[1];
const candidato3 = candidatos[2];

function vota(candidato) {
  candidato.votos += 1;
}

let qntEleitores = parseFloat(prompt("Digite eleitores irão votar: "));

function mostrarVencedor(candidatos) {
  let vencedor = candidatos[0];

  for (let i = 1; i < candidatos.length; i++) {
    if (candidatos[i].votos > vencedor.votos) {
      vencedor = candidatos[i];
    }
  }

  const empate =
    candidatos.filter((candidato) => candidato.votos === vencedor.votos)
      .length > 1;

  if (empate) {
    alert("Houve um empate entre os candidatos.");
  } else {
    alert(
      `O vencedor é o candidato ${vencedor.nome} com um total de ${vencedor.votos} votos`
    );
  }
}

function votacao(qntEleitores) {
  for (let i = 1; i <= qntEleitores; i++) {
    let escolha = parseFloat(
      prompt(
        `Eleitor nº${i}, selecione seu candidato:
        1 - Candidato ${candidato1.nome}
        2 - Consultato ${candidato2.nome}
        3 - Consultato ${candidato3.nome}`
      )
    );

    switch (escolha) {
      case 1:
        vota(candidato1);
        break;
      case 2:
        vota(candidato2);
        break;
      case 3:
        vota(candidato3);
        break;
      default:
        alert("Opção inválida!");
        break;
    }
  }
  mostrarVencedor(candidatos);
}

votacao(qntEleitores);
