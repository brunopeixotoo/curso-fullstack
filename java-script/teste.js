/* geElementById --> vai pegar um elemnento por ID */
var area = document.getElementById('area');


function entrar() {
    var nome = prompt("Qual seu nome?");
    var sobrenome = prompt("Qual seu sobrenome?");

    if (nome === '' || nome === null) {
        alert("Ops! Algo deu errado")
        area.innerHTML = "Clique no botão para acessar...";
    }else{
        area.innerHTML = "Bem Vindo, " + nome + " "+ sobrenome;

        /*Criando botão */
        let botaosair = document.createElement("button");
        /*Injetando botão */
        botaosair.innerHTML = "Sair da conta";

        /*Caso o botaão sair seja sofra um "click", vai ativar a "function sair()" */
        botaosair.onclick = sair;

        /*Como não exite um id ou class para injetar o button diretamente,
        será necessário aplicar ele em algum local do HTML.
        Com isso, será necessário dizer qual o id ou class que deseja aplica-lo.
        Uso do appendChild(nomedoqueserainjetado)*/
        area.appendChild(botaosair);
    }
}

/* Função para sair da área de login */
function sair() {
    alert("Até mais!");

    area.innerHTML = "Você saiu."
}

