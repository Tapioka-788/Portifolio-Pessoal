import { pegarFeedBack } from "./../../Controller/Services/feedback_S.js"

export async function criarFeedbackSection() {
    let feedbackSection = document.getElementById("feedback_sect");
    feedbackSection.innerHTML = '';

    const feedback = await pegarFeedBack()

    const caixaFeed = document.createElement("div");
    caixaFeed.id = "caixa_feed";

    const titulo = document.createElement("h1");
    titulo.id = "feedTexto";
    titulo.textContent = "Deixe seu FeedBack!";

    const inputContainer1 = document.createElement("div");
    inputContainer1.className = "inputeCOntador";

    const inputPagina = document.createElement("input");
    inputPagina.type = "text";
    inputPagina.className = "feedbackInput";
    inputPagina.maxLength = 45;
    inputPagina.required = true;
    inputPagina.id = "paginaFeed";
    inputPagina.placeholder = "Em qual tela/parte do site você gostaria de comentar?";

    const contadorNome = document.createElement("p");
    contadorNome.id = "contadorNome";
    contadorNome.textContent = "0/45";

    inputContainer1.appendChild(inputPagina);
    inputContainer1.appendChild(contadorNome);

    const inputContainer2 = document.createElement("div");
    inputContainer2.className = "inputeCOntador";

    const inputDescricao = document.createElement("input");
    inputDescricao.type = "text";
    inputDescricao.className = "feedbackInput";
    inputDescricao.maxLength = 100;
    inputDescricao.required = true;
    inputDescricao.id = "descricaoFeed";
    inputDescricao.placeholder = "Deixe seu comentário aqui";

    const contadorLinguagem = document.createElement("p");
    contadorLinguagem.id = "contadorLinguagem";
    contadorLinguagem.textContent = "0/100";

    inputContainer2.appendChild(inputDescricao);
    inputContainer2.appendChild(contadorLinguagem);

    const buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";

    const enviarButton = document.createElement("button");
    enviarButton.className = "feedButton";
    enviarButton.id = "enviarFeed";
    enviarButton.textContent = "Enviar";
    enviarButton.onclick = recolheDadosFeed;

    const cancelarButton = document.createElement("button");
    cancelarButton.className = "feedButton";
    cancelarButton.textContent = "Cancelar";
    cancelarButton.onclick = escondeTelFeed;

    buttonContainer.appendChild(enviarButton);
    buttonContainer.appendChild(cancelarButton);

    const feedbackList = document.createElement("div");
    feedbackList.id = "feedbackList";

    caixaFeed.appendChild(titulo);
    caixaFeed.appendChild(inputContainer1);
    caixaFeed.appendChild(inputContainer2);
    caixaFeed.appendChild(buttonContainer);
    caixaFeed.appendChild(feedbackList);

    feedbackSection.appendChild(caixaFeed);

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

        feedbackSection.appendChild(feedResposta);
    }
}
