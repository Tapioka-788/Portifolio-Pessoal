import { cadastrarCartao } from "./../Services/cartao_S.js";

let telaCad = document.getElementById('telaCadastro')

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