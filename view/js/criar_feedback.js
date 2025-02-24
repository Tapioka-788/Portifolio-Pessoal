import { pegarFeedBack } from "./../../Controller/Services/feedback_S.js"

export async function criarFeedbackSection() {
    let feedbackSection = document.getElementById("feedback_sect");

    const feedback = await pegarFeedBack()

    for (let i = 0; i < feedback.length; i++) {
        let feedResposta = document.createElement('div');
        feedResposta.className = 'caixaRespostaFeed';
    
        let textoFeedResposta = document.createElement('h1');
        textoFeedResposta.textContent = feedback[i].titulo
        textoFeedResposta.className = "textoRespostaFeed";
    
        let descricaoFeedResposta = document.createElement('p');
        descricaoFeedResposta.textContent =  feedback[i].descricao
        descricaoFeedResposta.className = "descricaoFeedResposta";
    
        feedResposta.appendChild(textoFeedResposta);
        feedResposta.appendChild(descricaoFeedResposta);
    }

    feedbackSection.appendChild(feedResposta);
}
