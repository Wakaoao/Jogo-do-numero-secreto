function verificaChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
        let mensagemTentativas =  `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', `${mensagemTentativas}`);
        //getElementById IGUAL O querySelector MAS USA id AO INVES DA tag
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Vish...');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Vish...');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}


function reiniciarJogo() {
    numeroSecreto = sorteia();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    //innerHTML USADO PARA ALTERAR UM ELEMENTO NO ARQUIVO HTML
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}


function sorteia() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return sorteia();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


function exibirMensagemInicial() {
  //let titulo = document.querySelector('h1');
  //titulo.innerHTML = 'Jogo do número secreto';
  exibirTextoNaTela('h1', 'Jogo do número secreto');

  //let paragrafo = document.querySelector('p');
  //paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');  
}

let listaDeNumerosSorteados = [];
let numeroLimite = 10;

exibirMensagemInicial();

let numeroSecreto = sorteia();
let tentativas = 1;

