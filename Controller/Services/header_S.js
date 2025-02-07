import { criarHeader } from "./../../view/js/criar_header.js";

export async function pegarHeader() {
   try {
      const response = await fetch('https://back-end-portifolio-lime.vercel.app/header')
      if (response.status === 200) {
         const data = await response.json()
         const header = data.header;

         return header;
      } else {
         alert('Sevice offline...');
         const header = [];
         return header;
      }
   }
   catch (e) {
      alert(e)
   }
}