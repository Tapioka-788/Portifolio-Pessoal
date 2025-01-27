import { criarCartoes } from "./../../view/js/criar_cartoes.js";

export async function pegarCartoes() {
   try {
      const response = await fetch('https://back-end-portifolio-lime.vercel.app/cartoes')
      if (response.status === 200) {
         const data = await response.json()
         const cartoes = data.cartoes;

         return cartoes;
      } else {
         alert('Sevice offline...');
         const cartoes = [];
         return cartoes;
      }
   }
   catch (e) {
      alert(e)
   }
}

export async function excluirCartoes(id) {
   try {
      const response = await fetch('https://back-end-portifolio-lime.vercel.app/cartoes', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ id }),
      });
      criarCartoes()
   }
   catch (error) {
      console.error('Erro ao excluir os cartoes', error)
   }
}

export async function cadastrarCartao(nome, linguagem, estado, link,img) {
   try {
      const response = await fetch('https://back-end-portifolio-lime.vercel.app/cartoes', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            nome: nome,
            linguagem: linguagem,
            estado: estado,
            link: link,
            img: img,
         }),
      });
      criarCartoes()
   }
   catch (e) {
      console.log(e)
   }
}

export async function atualizarCartao(id, nome, linguagem, estado, link,img) {
   try {
      const response = await fetch('https://back-end-portifolio-lime.vercel.app/cartoes', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            nome: nome,
            linguagem: linguagem,
            estado: estado,
            link: link,
            img: img,
            id: id,
         }),
      })
      criarCartoes();
   } catch (error) {
      console.error('Erro ao atualizar os cartoes', error)
   }
}