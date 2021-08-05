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
},
{
    nome: "Summoners War",
    imagem:"./imgs/SummonersWar.jpg",
    atributos:{
        ataque: 70,
        defesa: 70,
        magia: 90,
    }
}];
let cartaJogador;
let cartaMaquina;
let jogadorPlacar = 0;
let maquinaPlacar = 0;
let qtdCartas = 0;

exibirPlacar();

function exibirPlacar(){
    let getPlacar = document.getElementById('placar');
    let getQtdCartas = document.getElementById('qtdCartas');
    getPlacar.innerHTML = `Jogador: ${jogadorPlacar} / ${maquinaPlacar} :Máquina`
    qtdCartas = cartasJogadores.length;
    getQtdCartas.innerHTML = `Quantidade de cartas disponíveis: ${qtdCartas}`
}

function sortearCarta(){
    let getChoiceAtribute = document.getElementById('choiceAtribute');
  
    let valorRandomJogador = parseInt(Math.random() * cartasJogadores.length);
    cartaJogador = cartasJogadores[valorRandomJogador];
    cartasJogadores.splice(valorRandomJogador,1);
    
    let valorRandomMaquina = parseInt(Math.random() * cartasJogadores.length);
    cartaMaquina = cartasJogadores[valorRandomMaquina];
    cartasJogadores.splice(valorRandomMaquina,1);
    
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
   
    getChoiceAtribute.innerHTML = 'Agora escolha o seu atributo:'

    geraCardComponents();
}
function geraCardComponents(){
    //Carta do Jogador
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
    let opcoesTexto = ''
    let divHtml = `<div class="optionsCards">`
    for(let atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "' class='teste'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
    }
    getCardJogador.innerHTML = moldura + nomeCardJogador + divHtml + opcoesTexto + "</div>";

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
    let finalResult = document.querySelector('.resultadoFinal')
    let checkClickRadio = document.getElementsByName('atributo');
    let htmlResultado =''
        if(cartaJogador.atributos[valorAtrEscolhido] > cartaMaquina.atributos[valorAtrEscolhido]){
            htmlResultado = "<h2 class='resultado'> Venceu </h2>"
            jogadorPlacar++
        }else if (cartaJogador.atributos[valorAtrEscolhido] < cartaMaquina.atributos[valorAtrEscolhido]){
            htmlResultado = `<h2 class="resultado"> Perdeu </h2>`
            maquinaPlacar++
        }
        else{
            htmlResultado = `<h2 class="resultado"> Empatou </h2>`
        }
        finalResult.innerHTML = htmlResultado;
        if(cartasJogadores.length == 0){
            alert("Acabou o game!")
            if(jogadorPlacar > maquinaPlacar){
                finalResult.innerHTML = `<h2 class='resultado'>Jogador ganhou!!!</h2>`
            }else if(maquinaPlacar > jogadorPlacar){
                finalResult.innerHTML = `<h2 class='resultado'>Máquina ganhou!!!!</h2>`
            }else{
                finalResult.innerHTML = `<h2 class='resultado'>Empatou!!</h2>`
            }
        }else{
            document.getElementById('btnNovaRodada').disabled = true;
        }
        
       
        document.getElementById('btnSortear').disabled = true;
        document.getElementById('btnJogar').disabled = true;
        document.getElementById('btnNovaRodada').disabled = false;

        exibirPlacar();
        exibirResultadoMaquina();
}

function exibirResultadoMaquina(){
    //Carta da Máquina
    let getCardMaquina = document.getElementById('carta-maquina');
    let moldura = `<img src="./imgs/card-super-trunfo-transparent-ajustado.png" class="card-image">`
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

    let opcoesTexto = ''
    let divHtml = `<div class="optionsCardsMaquina">`
    for(let atributo in cartaMaquina.atributos){
        opcoesTexto += "<p name='atributo' value='" + atributo + "' class='teste'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p><br>";
    }
    getCardMaquina.innerHTML = moldura + nomeCardMaquina + divHtml + opcoesTexto + "</div>";

}

function novaRodada(){
    let getWrapper = document.querySelector('.wrapper');
    let getFinalResult = document.querySelector('.resultadoFinal')
    let html = `<div class="wrapper" id="wrapper">
    <div>
      <div id="carta-jogador">
        <img
          src="./imgs/card-super-trunfo-transparent-ajustado.png"
          alt="Carta Jogador"
          class="card-image"
        />
        <h3></h3>
      </div>
    </div>
    <div>
      <div id="carta-maquina">
        <img
          src="./imgs/card-super-trunfo-transparent-ajustado.png"
          alt="Carta maquina"
          class="card-image"
        />
        <h3></h3>
      </div>
    </div>
  </div>`;
    let htmlFinalResult = `<div class="resultadoFinal"></div>`;
    getWrapper.innerHTML = html;
    getFinalResult.innerHTML = htmlFinalResult;
    let getBtnSort = document.getElementById('btnSortear').disabled = false;

   
}