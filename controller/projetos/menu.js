let menu = document.getElementById('menu')
let barraUm = document.getElementById('barra_um')
let barraDois = document.getElementById('barra_dois')
let barraTres = document.getElementById('barra_tres')
let iconMenu = document.getElementById('icon_menu')



export function trocarMenu(){
    if(menu.style.left === '0vw'){
        menu.style.left = '-100vw'

        barraUm.style.transform = 'rotate(0deg)';
        barraUm.style.position = 'relative';
        barraUm.style.top = '0vh';

        barraDois.style.width = '5vw';
        barraDois.style.height = '1.6vh';

        barraTres.style.transform = 'rotate(-0deg)';
        barraTres.style.position = 'relative';
        barraTres.style.top = '0vh';
        
    }else{
        menu.style.left = '0vw'
        
        barraUm.style.transform = 'rotate(45deg)';
        barraUm.style.position = 'absolute';
        barraUm.style.top = '3vh';

        barraDois.style.width = '0vw';
        barraDois.style.height = '0vh';

        barraTres.style.transform = 'rotate(-45deg)';
        barraTres.style.position = 'absolute';
        barraTres.style.top = '3vh';
    }
}