//backend simulado

const banners = [

    {
        imagem: '',
        local: 'terra',
        curso: 'cursA',
        infos: 'bla bla bla',
        id: '0',
        nbtn:'1',
        cor: 'rgb(255,100,0)',
    },
    {
        imagem: '',
        local: 'brasil',
        curso: 'cursE',
        infos: 'bla bla bla',
        id: '1',
        nbtn:'2',
        cor: 'rgb(0,100,255)',
    },
    {
        imagem: '',
        local: 'parana',
        curso: 'cursI',
        infos: 'bla bla bla',
        id: '2',
        nbtn:'3',
        cor: 'rgb(255,255,0)',
    },
    {
        imagem: '',
        local: 'sudoeste',
        curso: 'cursO',
        infos: 'bla bla bla',
        id: '3',
        nbtn:'4',
        cor: 'rgb(255,255,255)',
    },
    {
        imagem: '',
        local: 'beltrao',
        curso: 'cursU',
        infos: 'bla bla bla',
        id: '4',
        nbtn:'5',
        cor: 'rgb(0,255,100)',
    },
];

//funcao de criar os banners

export function criarBanner() {
    let secction = document.getElementById('seccao');
    let bannersContainer = document.getElementById('banners');
    let botoes = document.getElementById('btn_banners');

    for (let i = 0; i < banners.length; i++) {
        bannersContainer.style.width = `${banners.length * 100}vw`;
        
        let banner = document.createElement('div');
        banner.style.backgroundColor = banners[i].cor;
        banner.className = 'banner';

        //caixa para os textos

        let caixaTxt = document.createElement('div')
        caixaTxt.className = 'caixa_texto'

        //caixa de imagem

        let foto = document.createElement('div')
        foto.className = 'caixa_foto'

        let imagem = document.createElement('img')
        imagem.className = 'imagem'
        imagem.src = banners[i].imagem

        //textos

        let local = document.createElement('h1')
        local.textContent = banners[i].local

        let curso = document.createElement('h1')
        curso.textContent = banners[i].curso

        let infos = document.createElement('h1')
        infos.textContent = banners[i].infos

        // botoes para trocar os banners

        let btn = document.createElement('button');
        btn.className = 'btn_banner';
        btn.onclick = () => trocarBanner(banners[i].id);

        let btnTxt = document.createElement('h1');
        btnTxt.textContent = banners[i].nbtn;

        // Appends Childs

        foto.appendChild(imagem)

        caixaTxt.appendChild(local)
        caixaTxt.appendChild(curso)
        caixaTxt.appendChild(infos)

        banner.appendChild(caixaTxt)
        banner.appendChild(foto)

        bannersContainer.appendChild(banner);

        btn.appendChild(btnTxt);
        botoes.appendChild(btn);

    }
    secction.appendChild(botoes);
    secction.appendChild(bannersContainer);
}
