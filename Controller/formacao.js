import { trocarBanner } from "./trocarbanner.js";
import { criarBanner } from "./../view/js/criar_banner.js"

window.trocarBanner = trocarBanner;

document.addEventListener("DOMContentLoaded", function(){
    criarBanner()
})