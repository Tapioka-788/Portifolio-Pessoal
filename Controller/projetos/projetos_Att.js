import { atualizarCartao } from "./../Services/cartao_S.js";
import { pegarCartoes } from "./../../Controller/Services/cartao_S.js";

let telaAtt = document.getElementById('telaAtt');
let id;

const cartoes = pegarCartoes()

export function escondeTelaAtt() {
    telaAtt.style.right = '-100vw';
}
export function mostraTelaAtt(i) {
    id = i;
    telaAtt.style.right = '1vw'

    console.log(id);
}
export function recolheDadosAtt() {
    let nome = document.getElementById('nome');
    let linguagem = document.getElementById('linguagem');
    let estado = document.getElementById('estado');
    let link = document.getElementById('link');
    let img = document.getElementById('img');

    if (nome.value === '' || linguagem.value === '' || estado.value === '' || link.value === '' || img.value === '') {
        alert('Verifique se todos os campos estão preenchidos');
    } else {
        console.log(id, nome.value, linguagem.value, estado.value, link.value, img.value);
        atualizarCartao(id, nome.value, linguagem.value, estado.value, link.value, img.value);
        escondeTelaAtt();

        nome.value = '';
        linguagem.value = '';
        estado.value = '';
        link.value = '';
        img.value = '';
    }
}