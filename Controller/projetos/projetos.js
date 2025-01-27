import { criarCartoes } from "./../../view/js/criar_cartoes.js";
import { escondeTelaCad } from "./projetos_Add.js";
import { recolheDados } from "./projetos_Add.js";

import { escondeTelaAtt } from "./projetos_Att.js";
import { recolheDadosAtt } from "./projetos_Att.js";

import { escodeTelaDel, recolheDadosDel} from './projetos_Del.js';

window.escodeTelaDel = escodeTelaDel;
window.recolheDadosDel = recolheDadosDel;

window.escondeTelaCad = escondeTelaCad;
window.recolheDados = recolheDados;

window.escondeTelaAtt = escondeTelaAtt;
window.recolheDadosAtt = recolheDadosAtt;

document.addEventListener("DOMContentLoaded", ()=>{
    criarCartoes();
})