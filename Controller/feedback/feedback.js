import { criarFeedbackSection } from "./../../view/js/criar_feedback.js"

import { escondeTelFeed } from "./troca_feed.js"
import { mostraTelFeed } from "./troca_feed.js"

import { recolheDadosFeed } from "./feedback_add.js"

window.mostraTelFeed = mostraTelFeed;
window.escondeTelFeed = escondeTelFeed;

window.recolheDadosFeed = recolheDadosFeed

document.addEventListener("DOMContentLoaded", function () {
    criarFeedbackSection()
})