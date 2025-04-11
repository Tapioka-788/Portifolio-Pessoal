// import { pegarHeader } from "../../Controller/Services/header_S.js";
import { header }from "./../../Model/header.js"

export async function criarHeader() {
    let Sepheader = document.getElementById('header');
    let botoes = document.getElementById('botoes');
    // Sepheader é separaracao header

    // Sepheader.innerHTML = '';
    botoes.innerHTML = '';

    // const header = await pegarHeader()

    for (let i = 0; i < header.length; i++) {
        let button = document.createElement('button')
        button.className = 'btn'

        //vai pra tela responsavel
        button.addEventListener('click', () => {
            window.location.href = header[i].pagina;
        });

        //texto
        let h3 = document.createElement('h3')
        h3.className = 'textos_botoes'
        h3.textContent = header[i].nome;

        //icone
        let ic = document.createElement('i')
        ic.classList = header[i].icone;

        button.appendChild(h3)
        button.appendChild(ic)

        botoes.appendChild(button)
    }
    Sepheader.appendChild(botoes)
    // Sepheader é separaracao header
}
