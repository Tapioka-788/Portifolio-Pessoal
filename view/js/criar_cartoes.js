import { mostraTelaCad } from "./../../Controller/projetos/projetos_Add.js"
import { mostraTelaAtt } from "./../../Controller/projetos/projetos_Att.js";
import { excluirCartoes } from "./../../Controller/Services/cartao_S.js";
import { pegarCartoes } from "./../../Controller/Services/cartao_S.js";
import { mostraTelaDel } from "./../../Controller/projetos/projetos_Del.js";

export async function criarCartoes() {
    let secitionCartoes = document.getElementById('section');
    let pagina = document.getElementById('pagina');
    secitionCartoes.innerHTML = '';
    pagina.innerHTML = '';

    const cartoes = await pegarCartoes()

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'card';

        if (cartoes[i].estado === 'Concluído') {
            cartao.style.backgroundColor = 'green';
        } else if (cartoes[i].estado === 'Em Andamento') {
            cartao.style.backgroundColor = 'yellow';
        } else if (cartoes[i].estado === 'Iniciado') {
            cartao.style.backgroundColor = 'red';
        }

        let boxInfos = document.createElement('div');
        boxInfos.className = 'boxInfos';

        let nome = document.createElement('h1');
        nome.className = 'nomeC';
        nome.textContent = 'Projeto: ' + cartoes[i].nome;

        let linguagem = document.createElement('h1');
        linguagem.className = 'linguagem';
        linguagem.textContent = 'Linguagem: ' + cartoes[i].linguagem;

        let imagem = document.createElement('img');
        imagem.className = 'imagem';
        imagem.src = cartoes[i].img;

        let boxBotao = document.createElement('div');
        boxBotao.className = 'botaoBox';

        let link = document.createElement('button');
        link.className = 'link';
        link.textContent = 'Acesse Aqui';
        
        link.addEventListener('click', () => {
            let newTab = window.open(cartoes[i].link, '_blank');
            if (newTab) {
                newTab.focus();
            } else {
                alert('Pop-up bloqueado! Permita pop-ups para abrir o link em uma nova aba.');
            }
        });

        let button = document.createElement('button')
        button.id = 'lixeira'
        button.addEventListener('click', ()=>{
            excluirCartoes(cartoes[i].id);
        });

        let lixo = document.createElement('i')
        lixo.classList.add('fa-solid')
        lixo.classList.add('fa-trash')

        let atualizarbutton = document.createElement('button')
        atualizarbutton.id = 'lapis'
        atualizarbutton.addEventListener('click', () => {
            mostraTelaAtt(cartoes[i].id)
        })

        let caneta = document.createElement('i')
        caneta.classList.add('fa-solid')
        caneta.classList.add('fa-pen')

        button.appendChild(lixo)
        atualizarbutton.appendChild(caneta)

        boxInfos.appendChild(nome);
        boxInfos.appendChild(linguagem);

        boxBotao.appendChild(button);
        boxBotao.appendChild(link);  
        boxBotao.appendChild(atualizarbutton);

        cartao.appendChild(boxInfos);
        cartao.appendChild(imagem);
        cartao.appendChild(boxBotao);

        pagina.appendChild(cartao);
    }
    let cartaoAdd = document.createElement('button')
    cartaoAdd.id = 'cartao_add'
    cartaoAdd.textContent = '+'

    cartaoAdd.addEventListener('click', () => {
        mostraTelaCad();
    })
    
    pagina.appendChild(cartaoAdd);

    secitionCartoes.appendChild(pagina);
}
