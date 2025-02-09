import { cadastrarCartao } from "./../Services/cartao_S.js";

let telaCad = document.getElementById('telaCadastro')

const limiteNome = 30;

const nomeInput = document.getElementById('nomeAdd');
const contadorNome = document.getElementById('contadorNome');

function atualizarContador(input, contador, limite) {
    const comprimento = input.value.length;
    contador.textContent = `${comprimento}/${limite}`;

    if (comprimento >= limite) {
        contador.classList.add('contadorLimite');
    } else {
        contador.classList.remove('contadorLimite');
    }
}

nomeInput.addEventListener('input', () => {
    atualizarContador(nomeInput, contadorNome, limiteNome);
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