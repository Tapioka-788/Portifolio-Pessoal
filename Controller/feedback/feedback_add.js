import {cadastrarFeedBack} from"./../Services/feedback_S.js"

import { escondeTelFeed } from "./troca_feed.js"

export function recolheDadosFeed() {
    let titulo = document.getElementById('paginaFeed');
    let descricao = document.getElementById('descricaoFeed');
    
    if(titulo.value === "", descricao.value === ''){
        alert('Check se todos os campos estão preenchidos');
    } else {
        cadastrarFeedBack(titulo.value, descricao.value);
        escondeTelFeed();

        titulo.value = '';
        descricao.value = '';
    }
}


const limiteNome = 45;
const nomeInput = document.getElementById('paginaFeed');
const contadorNome = document.getElementById('contadorNome');

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

const limiteLing = 100;
const lingInput = document.getElementById('descricaoFeed');
const contadorLing = document.getElementById('contadorLinguagem');

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
