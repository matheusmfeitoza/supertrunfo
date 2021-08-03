let cartaMatheus = {
    nome: "Call of Duty",
    atributos:{
        ataque: 100,
        defesa: 50,
        magia: 70
    }
}
let cartaThais = {
    nome: "Battlefield",
    atributos: {
        ataque: 70,
        defesa: 100,
        magia: 70
    }
}
let cartaJogador;
let cartaMaquina;
let cartasJogadores = [cartaMatheus,cartaThais];

function sortearCarta(){
    let valorRandomJogador = parseInt(Math.random() * 2);
    cartaJogador = cartasJogadores[valorRandomJogador];
    
    let valorRandomMaquina = parseInt(Math.random() * 2);
    while(valorRandomMaquina == valorRandomJogador){
        valorRandomMaquina = parseInt(Math.random() * 2);
    }
    cartaMaquina = cartasJogadores[valorRandomMaquina];
    criaAtributoNatela();

}

function criaAtributoNatela(){
    let getAtrspace = document.getElementById('addInput');
    let opcoesTexto = '';
    for(let atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    getAtrspace.innerHTML = opcoesTexto;
}

function capturaAtributoEscolhido(){
    let getClick = document.getElementsByName('atributo');
    for (let i = 0; i < getClick.length; i++){
        if(getClick[i].checked){
            return getClick[i].value;
        }
    }
}   


function jogar(){
    let valorAtrEscolhido = capturaAtributoEscolhido();
    if(cartaJogador.atributos[valorAtrEscolhido] > cartaMaquina.atributos[valorAtrEscolhido]){
        alert("Você ganhou!")
    }else if (cartaJogador.atributos[valorAtrEscolhido] < cartaMaquina.atributos[valorAtrEscolhido]){
        alert("Você perdeu!")
    }else{
        alert("Empatou!!")
    }

}