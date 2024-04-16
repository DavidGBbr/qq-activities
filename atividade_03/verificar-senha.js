/*Desenvolva um algoritmo que verifique a força de uma senha baseada em critérios de
complexidade. Seguem os critérios:
• Ter pelo menos 8 caracteres.
• Incluir pelo menos uma letra maior
• Incluir pelo menos uma letra minúscula.
• Conte com pelo menos um número.
• Possuir pelo menos um caractere especial (por exemplo, @, #, $, %).
Requisitos do Sistema:
O sistema deve solicitar ao usuário que digite uma senha.
O algoritmo deve então avaliar a senha
Com base na avaliação, o sistema deve classificar a senha como "Forte", "Média" ou
"Fraca", e explicar o que falta para que a senha seja considerada forte, se for o caso. */

function verificarForcaSenha(senha) {
  let resultado = "";
  let forca = 0;

  if (senha.length < 8) {
    resultado += "A senha deve ter pelo menos 8 caracteres.\n";
  } else {
    forca++;
  }

  if (!/[A-Z]/.test(senha)) {
    resultado += "A senha deve incluir pelo menos uma letra maiúscula.\n";
  } else {
    forca++;
  }

  if (!/[a-z]/.test(senha)) {
    resultado += "A senha deve incluir pelo menos uma letra minúscula.\n";
  } else {
    forca++;
  }

  if (!/\d/.test(senha)) {
    resultado += "A senha deve incluir pelo menos um número.\n";
  } else {
    forca++;
  }

  if (!/[@#$%]/.test(senha)) {
    resultado +=
      "A senha deve incluir pelo menos um caractere especial (@, #, $, %).\n";
  } else {
    forca++;
  }

  if (forca === 5) {
    resultado = "Forte";
  } else if (forca >= 3) {
    resultado +=
      "Média: A senha pode ser mais forte se incluir mais caracteres especiais.\n";
  } else {
    resultado +=
      "Fraca: A senha não atende aos critérios mínimos de complexidade.\n";
  }

  return resultado;
}

let senha = prompt("Digite sua senha:");

let forcaSenha = verificarForcaSenha(senha);
alert(forcaSenha);
