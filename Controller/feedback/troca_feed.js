let feedbackSection = document.getElementById("feedback_sect");

export function mostraTelFeed() {
    feedbackSection.style.left = '0vw'
}

export function escondeTelFeed() {
    feedbackSection.style.left = '100vw';

    const enviar = document.getElementById("enviarFeed");

    if (enviar) {
        enviar.onclick = function() {
            alert("ESTA EM DEV, TENHA PACIENCIA!!!");
        };
    }
}