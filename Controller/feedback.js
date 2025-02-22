import { criarFeedbackSection } from "./../view/js/criar_feedback.js"

import { escondeTelFeed } from "./troca_feed.js"
import { mostraTelFeed } from "./troca_feed.js"

window.mostraTelFeed = mostraTelFeed;
window.escondeTelFeed = escondeTelFeed;

document.addEventListener("DOMContentLoaded", function () {
    criarFeedbackSection()
})