import { criarFeedbackSection } from "./../../view/js/criar_feedback.js";

export async function pegarFeedBack() {
    try {
       const response = await fetch('https://back-end-portifolio-lime.vercel.app/feedback')
       if (response.status === 200) {
          const data = await response.json()
          const feedback = data.feedback;
 
          return feedback;
    //    } else {
    //       alert('Sevice offline...');
    //       const feedback = [];
    //       return feedback;
       }
    }
    catch (e) {
       alert(e)
    }
 }

 export async function cadastrarFeedBack(titulo, descricao, ) {
    try {
       const response = await fetch('https://back-end-portifolio-lime.vercel.app/feedback', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json',
          },
          body: JSON.stringify({
             titulo: titulo,
             descricao: descricao,
          }),
       });
       criarFeedbackSection()
    }
    catch (e) {
       console.log(e)
    }
 }