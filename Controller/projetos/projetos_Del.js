import { excluirCartoes } from "./../Services/cartao_S.js";

let telaDelet = document.getElementById('confirm_delete');
let id;

export function escodeTelaDel() {
    telaDelet.style.left = '-100vw';
}
export function mostraTelaDel(i) {
    id = i;
    telaDelet.style.left = '0';
    alert('Para excluir um cartao, insira o nome e a senha!')
}

export function recolheDadosDel(i){
    excluirCartoes(cartoes[i].id);
    escodeTelaDel();
}