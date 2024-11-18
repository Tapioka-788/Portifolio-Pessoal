//backend simulado

const banners = [

    // a cor sera trocada, substituida pela imagem

    {
        imagem: '',
        local: '',
        curso: '',
        infos: '',
        id: '0',
        nbtn:'1',
        cor: 'rgb(255,100,0)',
    },
    {
        imagem: '',
        local: '',
        curso: '',
        infos: '',
        id: '1',
        nbtn:'2',
        cor: 'rgb(0,100,255)',
    },
    {
        imagem: '',
        local: '',
        curso: '',
        infos: '',
        id: '2',
        nbtn:'3',
        cor: 'rgb(255,255,0)',
    },
];

//funcao de criar os banners

export function criarBanner() {
    let secction = document.getElementById('seccao');
    let bannersContainer = document.getElementById('banners');
    let botoes = document.getElementById('btn_banners');

    for (let i = 0; i < banners.length; i++) {
        let banner = document.createElement('div');
        banner.style.backgroundColor = banners[i].cor;
        banner.className = 'banner';

        let btn = document.createElement('button');
        btn.className = 'btn_banner';
        btn.onclick = () => trocarBanner(banners[i].id);

        let btnTxt = document.createElement('h1');
        btnTxt.textContent = banners[i].nbtn;

        bannersContainer.style.width = `${banners.length * 100}vw`;

        // Appends Childs
        btn.appendChild(btnTxt);
        botoes.appendChild(btn);

        bannersContainer.appendChild(banner);
    }
    secction.appendChild(botoes);
    secction.appendChild(bannersContainer);
}
