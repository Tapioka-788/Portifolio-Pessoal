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

    fetch('https://back-end-portifolio-lime.vercel.app/cartoes')
    .then((response) => response.json())
    .then((data) => {
        // Encontrar o cartão correspondente ao ID
        const cartao = data.cartoes.find(c => c.id === id);

        // Preencher os campos com os dados do cartão encontrado
        if (cartao) {
            document.getElementById('nome').value = cartao.nome || '';
            document.getElementById('linguagem').value = cartao.linguagem || '';
            document.getElementById('estado').value = cartao.estado || '';
            document.getElementById('link').value = cartao.link || '';
            document.getElementById('img').value = cartao.img || '';
        }
    })
    .catch((error) => console.error('Erro ao buscar os cartões:', error));

// Exibir a tela de atualização

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