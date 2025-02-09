import { cadastrarCartao } from "./../Services/cartao_S.js";

let telaCad = document.getElementById('telaCadastro')

const limiteNome = 30;
const nomeInput = document.getElementById('nomeAdd');
const contadorNome = document.getElementById('contador-nome');

function atualizarContadorN(input, contador, limite) {
    const comprimentoN = input.value.length;
    contador.textContent = `${comprimentoN}/${limite}`;

    if (comprimentoN >= limite) {
        contador.className ='contadorLimiteN';
    } else {
        contador.className = 'contadorNormalN';
    }
}

nomeInput.addEventListener('input', () => {
    atualizarContadorN(nomeInput, contadorNome, limiteNome);
});

const limiteLing = 50;
const lingInput = document.getElementById('linguagemAdd');
const contadorLing = document.getElementById('contador-linguagem');

function atualizarContadorL(input, contador, limite) {
    const comprimentoL = input.value.length;
    contador.textContent = `${comprimentoL}/${limite}`;

    if (comprimentoL >= limite) {
        contador.className ='contadorLimiteL';
    } else {
        contador.className = 'contadorNormalL';
    }
}

lingInput.addEventListener('input', () => {
    atualizarContadorL(lingInput, contadorLing, limiteLing);
});

//"SABIO É O HOMEM QUE NAO DISCUTE COM MULHER"
//Ass:Bryam Assolini, nas historias de seu discipulo Felipetto


export function escondeTelaCad() {
    telaCad.style.left = '-100vw'
}

export function mostraTelaCad() {
    telaCad.style.left = '0vw'
}

export function recolheDados() {
    let nome = document.getElementById('nomeAdd');
    let linguagem = document.getElementById('linguagemAdd');
    let estado = document.getElementById('estadoAdd');
    let link = document.getElementById('linkAdd');
    let img = document.getElementById('imgAdd');

    if(nome.value === "", linguagem.value === '', estado === '', link.value === '', img.value ===''){
        alert('Check se todos os campos estão preenchidos');
    } else {
        cadastrarCartao(nome.value, linguagem.value, estado.value, link.value, img.value,);
        escondeTelaCad();

        nome.value = '';
        linguagem.value = '';
        estado.value = '';
        link.value = '';
        img.value = '';
    }
}