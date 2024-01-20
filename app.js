
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    console.log(`numeroSecreto: ${numeroSecreto}`);
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate: 1.2})
    
}
function exibirMensagemInicial() {
        exibirTextoNaTela('h1', 'Jogo do numero secreto' );
        exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas < 2 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
                if (chute > numeroSecreto) {
                        exibirTextoNaTela('p', 'O número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo();
        }

        
}

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }    

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
} 

function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
}

function reiniciarJogo() {
        numeroSecreto = geraNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();