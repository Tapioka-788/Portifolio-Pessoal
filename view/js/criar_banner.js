//backend simulado

const banners = [

    {
        imagem: '',
        local: 'Sesc Senac',
        curso: 'Desenvolvedor WEB',
        infos: 'Curso para desenvolvimento de sites web, com html, css, js, e biblioteca node.js',
        id: '0',
        nbtn:'1',
        cor: 'RGB(0, 150, 200)',
    },
    {
        imagem: '',
        local: 'Cema',
        curso: 'Ensino tecnico - Desenvolvimento de sistemas',
        infos: 'Ensinho medio e ensino tecnico no curso de DS',
        id: '1',
        nbtn:'2',
        cor: 'RGB(0, 150, 200)',
    },
    {
        imagem: '',
        local: 'Rockfeller',
        curso: 'Inglês',
        infos: 'Curso de ingles fluente',
        id: '2',
        nbtn:'3',
        cor: 'RGB(0, 150, 200)',
    },
    {
        imagem: '',
        local: 'Sesi',
        curso: 'Manutencao para operadores de Maquinas',
        infos: 'Curso para manutencao, fabricacao de pecas e manuzeamento de ferramentas e maquinas industriais',
        id: '3',
        nbtn:'4',
        cor: 'RGB(0, 150, 200)',
    },
    {
        imagem: '',
        local: 'Prepara Cursos',
        curso: 'Curso de informatica',
        infos: 'Curso de aprendizagem e manuzeamento de todas as ferramentas Microsft',
        id: '4',
        nbtn:'5',
        cor: 'RGB(0, 150, 200)',
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
        local.textContent = 'Local: - ' + banners[i].local

        let curso = document.createElement('h1')
        curso.textContent = 'Curso: - ' + banners[i].curso

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

    let adicionar = document.createElement('button')
    adicionar.id = 'adicionar'
    adicionar.onclick = () => mostraTelAdd();

    let iAdd = document.createElement('i')
    iAdd.classList = 'fa-solid fa-plus fa-2xl'
    iAdd.color = 'rgb(0, 0, 0)'

    adicionar.appendChild(iAdd)

    botoes.appendChild(adicionar)

    secction.appendChild(botoes);
    secction.appendChild(bannersContainer);
}
