let amigos = []; // variável que guarda o nome dos amigos digitados

// função para adicionar amigos
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim(); 

    // validar que o campo não está vazio
    if(nomeAmigo === "") {
        alert("Por favor, insira um nome.")
        return; // Finaliza a função se o campo estiver vazio

    }

    // validação de duplicação do nome
    if(amigos.includes(nomeAmigo)) {
        alert(`O nome  "${nomeAmigo}" já foi adicionado. Por favor, insira um nome diferente.`);
        inputAmigo.value = ""; // Para limpar o campo onde foi inserido o nome
        return; // Finaliza a função
    }

    //adicionar o nome de array de amigos
    amigos.push(nomeAmigo);      
    atualizarLista();// atualizar lista no HTML
    inputAmigo.focus(); // Cursor pronto para digitar o próximo nome
    inputAmigo.value = ""; // Lipa o nome depois de inserir o nome do amigo
}

// Função para atualizar amigos e mostrar na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');    
    listaAmigos.innerHTML = ""; // Limpa a lista para recriar outra    

    // Cria um item de lista (li) para cada amigo no array
    for(let i = 0; i <amigos.length; i++ ) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Função para realizar o sorteio do amigo secreto
function sortearAmigo() {
    if(amigos.length < 2 ){ // se há amigos suficintes para sorteio.
        alert("Insira no mínimo dois amigos para realizar o sorteio!");
        return; // fim da função
    }

    //Gerar índice
    const índiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um ídice aleatório baseado no tamanho do array de amigos    
    const amigoSorteado = amigos[índiceSorteado]; // usa o índice de amigos para sortear os nomes de array    
    const resultado  = document.getElementById('resultado');//Mostra o amigo sorteado
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}`;       
    
}
