let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentantivas = 1;
let botaoclicado = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); 
}

function exibirMensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite}`);
}
exibirMensagemIncial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'ACERTOU!');
        let palavraTentativa = tentantivas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns você acertou o numero secreto com ${tentantivas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'ERROU!');
            exibirTextoNaTela('p','O número secreto é menor');
        } else{
            exibirTextoNaTela('h1', 'ERROU!');
            exibirTextoNaTela('p','O número secreto é maior');
        }
    }
    tentantivas++;
    limparCampo()
}


//Manipulando a lista
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length; 

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();        
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    let campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentantivas = 1;
    exibirMensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    botaoclicado++;
    let palavraVezes = botaoclicado > 1 ? 'vezes' : 'vez';
    console.log(`O jogo foi reiniciado ${botaoclicado} ${palavraVezes}.`);
}


