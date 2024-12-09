let cartoes = [
    {
        nome: 'Portifolio Pessoal',
        linguagem: 'Html; CSS; Js',
        estado: 'ok',
        link: 'https://github.com/Tapioka-788/Portifolio-Pessoal.git',
        img: 'tche tche',
    },
    {
        nome: 'Pokemon Gen3',
        linguagem: 'Html; CSS; Js',
        estado: 'andamento',
        link: 'https://github.com/Tapioka-788/Pokemon-Gen3.git',
        img: 'tcha tcha',
    },
    {
        nome: 'Trash-Point',
        linguagem: 'Html; CSS; Js',
        estado: 'inicio',
        link: 'https://github.com/Tapioka-788/trashPoint.git',
        img: 'tche tche',
    },
    {
        nome: 'K-entre-nos',
        linguagem: 'Html; CSS; Js',
        estado: 'ok',
        link: 'https://github.com/BryamSenac/k_entre_nos.githttps://github.com/BryamSenac/k_entre_nos.git',
        img: 'tcha tcha',
    },
    {
        nome: 'Bridge-Works',
        linguagem: 'Html; CSS; Js',
        estado: 'inicio',
        link: 'https://github.com/Tapioka-788/BridgeWorks.git',
        img: 'tche tche',
    },
    {
        nome: 'Backend Bridge-Works',
        linguagem: 'Js; Node.js',
        estado: 'andamento',
        link: 'https://github.com/Tapioka-788/Backend-BridgeWorks.git',
        img: 'tcha tcha',
    },
];

export async function criarCartoes() {

    let secitionCartoes = document.getElementById('section');
    let pagina = document.getElementById('pagina');
    secitionCartoes.innerHTML = '';

    for (let i = 0; i < cartoes.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'card';

        if (cartoes[i].estado === 'ok') {
            cartao.style.backgroundColor = 'green';
        } if (cartoes[i].estado === 'andamento') {
            cartao.style.backgroundColor = 'yellow';
        } if (cartoes[i].estado === 'inicio') {
            cartao.style.backgroundColor = 'red';
        }

        // Criando a box para nome e linguagem
        let boxInfos = document.createElement('div');
        boxInfos.className = 'boxInfos';

        let nome = document.createElement('h1');
        nome.className = 'nome';
        nome.textContent = 'Projeto: ' + cartoes[i].nome;

        let linguagem = document.createElement('h1');
        linguagem.className = 'linguagem';
        linguagem.textContent = 'Linguagem: ' + cartoes[i].linguagem;

        // Criando a imagem
        let imagem = document.createElement('img');
        imagem.className = 'imagem';
        imagem.src = cartoes[i].img;

        // Criando a box para o botão
        let boxBotao = document.createElement('div');
        boxBotao.className = 'botaoBox';

        let link = document.createElement('button');
        link.className = 'link';
        link.textContent = 'Acesse Aqui';

        // Adicionando evento ao botão
        link.addEventListener('click', () => {
            window.location.href = cartoes[i].link;
        });

        // Adicionando nome e linguagem à box
        boxInfos.appendChild(nome);
        boxInfos.appendChild(linguagem);

        // Adicionando o botão à box
        boxBotao.appendChild(link);

        // Adicionando as boxes e a imagem ao cartão
        cartao.appendChild(boxInfos);
        cartao.appendChild(imagem); // Adicionando a imagem entre as boxes
        cartao.appendChild(boxBotao);

        // Adicionando o cartão à página
        pagina.appendChild(cartao);
    }
    secitionCartoes.appendChild(pagina);
}


