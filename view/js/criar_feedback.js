export function criarFeedbackSection() {
    let feedbackSection = document.getElementById("feedback_sect");

    let caixaFeed = document.createElement("div");
    caixaFeed.id = "caixa_feed";

    let titulo = document.createElement("h1");
    titulo.id = 'feedTexto'
    titulo.textContent = "Deixe seu FeedBack!";

    let inputFeedback = document.createElement("input");
    inputFeedback.type = "text";
    // inputFeedback.placeholder = "Comentário";
    inputFeedback.placeholder = "EM DESENVOLVIMENTO AINDA";
    inputFeedback.id = "feedbackInput";

    let buttonContainer = document.createElement("div");
    buttonContainer.id = 'buttonContainer'

    let sendButton = document.createElement("button");
    sendButton.className = "feedButton";
    sendButton.textContent = "Enviar";

    let cancelButton = document.createElement("button");
    cancelButton.className = "feedButton";
    cancelButton.textContent = "Cancelar";
    cancelButton.onclick = escondeTelFeed;

    let feedbackList = document.createElement("div");
    feedbackList.id = "feedbackList";

    buttonContainer.appendChild(sendButton);
    buttonContainer.appendChild(cancelButton);

    caixaFeed.appendChild(titulo);
    caixaFeed.appendChild(inputFeedback);
    caixaFeed.appendChild(buttonContainer);
    caixaFeed.appendChild(feedbackList);
    
    feedbackSection.appendChild(caixaFeed);
}
