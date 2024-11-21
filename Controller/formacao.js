import { trocarBanner } from "./trocarbanner.js";
import { criarBanner } from "./../view/js/criar_banner.js"

import { escondeTelAdd } from "./telaAdd.js"
import { mostraTelAdd } from "./telaAdd.js"

window.trocarBanner = trocarBanner;

window.mostraTelAdd = mostraTelAdd;
window.escondeTelAdd = escondeTelAdd;

document.addEventListener("DOMContentLoaded", function () {
    criarBanner()
})