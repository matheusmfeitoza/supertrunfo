let cartasJogadores = [{
    nome: "Call of Duty",
    imagem:"./imgs/callofduty.jpg",
    atributos:{
        ataque: 100,
        defesa: 50,
        magia: 70
    }
},
{
    nome: "Battlefield",
    imagem:"./imgs/battlefield.jpg",
    atributos: {
        ataque: 70,
        defesa: 100,
        magia: 70
    }
},
{
    nome: "Grand Chase",
    imagem:"./imgs/GrandChaseClassic.jpg",
    atributos:{
        ataque: 76,
        defesa: 81,
        magia: 91
    }
},
{
    nome: "Mu Online",
    imagem:"./imgs/muOnline.jpg",
    atributos:{
        ataque: 88,
        defesa: 20,
        magia: 50,
    }
},
{
    nome: "League of Legends",
    imagem:"./imgs/leagueLegends.jpg",
    atributos:{
        ataque: 60,
        defesa: 90,
        magia: 99
    }
}];
let cartaJogador;
let cartaMaquina;

function sortearCarta(){
    let valorRandomJogador = parseInt(Math.random() * cartasJogadores.length);
    cartaJogador = cartasJogadores[valorRandomJogador];
    
    let valorRandomMaquina = parseInt(Math.random() * cartasJogadores.length);
    while(valorRandomMaquina == valorRandomJogador){
        valorRandomMaquina = parseInt(Math.random() * cartasJogadores.length);
    }
    cartaMaquina = cartasJogadores[valorRandomMaquina];
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    criaAtributoNatela();
    geraCardComponents();
}
function geraCardComponents(){
    let moldura = `<img src="./imgs/card-super-trunfo-transparent-ajustado.png" class="card-image">`
    let getCardJogador = document.getElementById('carta-jogador');
    getCardJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    if(window.matchMedia("(max-width:678px)").matches){
        getCardJogador.style.backgroundRepeat = "no-repeat";
        getCardJogador.style.backgroundPositionY = "50px";
        getCardJogador.style.backgroundPositionX = "10px";
        getCardJogador.style.backgroundSize = "156px 119px";
        getCardJogador.style.backgroundPosition = "10px 20px";
    }else{
        getCardJogador.style.backgroundSize = "270px 180px";
        getCardJogador.style.backgroundRepeat = "no-repeat";
        getCardJogador.style.backgroundPositionY = "50px";
        getCardJogador.style.backgroundPositionX = "10px";
    }

    let nomeCardJogador =`<p class="carta-subtitle -diff1"> ${cartaJogador.nome}</p>`
    getCardJogador.innerHTML = moldura + nomeCardJogador;


    let getCardMaquina = document.getElementById('carta-maquina');
    getCardMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    if(window.matchMedia("(max-width:678px)").matches){
        getCardMaquina.style.backgroundRepeat = "no-repeat";
        getCardMaquina.style.backgroundPositionY = "50px";
        getCardMaquina.style.backgroundPositionX = "10px";
        getCardMaquina.style.backgroundSize = "156px 119px";
        getCardMaquina.style.backgroundPosition = "10px 20px";
    }else{
        getCardMaquina.style.backgroundSize = "270px 180px";
        getCardMaquina.style.backgroundRepeat = "no-repeat";
        getCardMaquina.style.backgroundPositionY = "50px";
        getCardMaquina.style.backgroundPositionX = "10px";
    }

    let nomeCardMaquina = `<p class="carta-subtitle -diff2">${cartaMaquina.nome}</p>`
    getCardMaquina.innerHTML = moldura + nomeCardMaquina;

    
    
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
    let checkClickRadio = document.getElementsByName('atributo');
        if(cartaJogador.atributos[valorAtrEscolhido] > cartaMaquina.atributos[valorAtrEscolhido]){
            alert("Você ganhou!")
        }else if (cartaJogador.atributos[valorAtrEscolhido] < cartaMaquina.atributos[valorAtrEscolhido]){
            alert("Você perdeu!")
        }
        else{
            alert("Empatou")
        }

}