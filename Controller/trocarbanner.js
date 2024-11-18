let secction = document.getElementById('seccao')
let banners = document.getElementById('banners')

secction.appendChild(banners)

export function trocarBanner(numeroBanner){
    banners.style.left = '-' + numeroBanner + '00vw'
}