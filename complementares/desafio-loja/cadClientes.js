const clientes = []; 

document.getElementById("cadastrarCliente").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const cpf = document.getElementById("cpf").value;
    const origem = document.getElementById("origem").value;
    const score = document.getElementById("score").value;
    
    const cliente = {
        nome: nome,
        dataNascimento: dataNascimento,
        cpf: cpf,
        origem: origem,
        score: score
    };
    
    clientes.push(cliente); 
    
    
    document.getElementById("nome").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("origem").value = "Loja";
    document.getElementById("score").value = "";
    
    exibirMensagem("Cliente cadastrado com sucesso!");
});

document.getElementById("consultarClientes").addEventListener("click", function() {
    const listaClientesDiv = document.getElementById("exibirClientes");
    listaClientesDiv.innerHTML = ""; // Limpar a lista antes de exibir os dados
    
    if (clientes.length === 0) {
        exibirMensagem("Nenhum cliente cadastrado ainda.");
    } else {
        listaClientesDiv.innerHTML = "<h2>Clientes Cadastrados:</h2>";
        const ul = document.createElement("ul");
        
        for (const cliente of clientes) {
            const li = document.createElement("li");
            li.textContent = `Nome: ${cliente.nome}, CPF: ${cliente.cpf}, Origem: ${cliente.origem}, Score: ${cliente.score}`;
            ul.appendChild(li);
        }
        
        listaClientesDiv.appendChild(ul);
    }
});


function exibirMensagem(mensagem) {
    const mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    setTimeout(() => {
        mensagemDiv.textContent = "";
    }, 3000); 
}
