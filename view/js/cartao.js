export function criarCartoes() {

    //cartao em forma de variavel

    let cartoes = document.getElementById('cartoes')

    for (let i = 0; i < 6; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao_vaga';

        let h1 = document.createElement('h1')
        h1.textContent = 'Salario'
        h1.className = 'ct_font';
        let h5 = document.createElement('h5')
        h5.textContent = 'Vaga'
        h5.className = 'ct_font';
        let p = document.createElement('p')
        p.textContent = 'Descrição'
        let h2 = document.createElement('h2')
        h2.textContent = "88:88"

        let h3 = document.createElement('h3')
        h3.className = 'rodape_card';
        h3.textContent = "Local da Empresa"


        cartao.appendChild(h1)
        cartao.appendChild(h5)
        cartao.appendChild(p)
        cartao.appendChild(h2)
        cartao.appendChild(h3)

        cartoes.appendChild(cartao)
    }

}