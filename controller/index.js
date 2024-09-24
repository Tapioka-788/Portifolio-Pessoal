let footer = document.getElementById ("footer");
let h1 = document.createElement('h1');

h1.textContent = 'guilhermezuchellifelipetto@gmail.com'; 
h1.style.color = 'white'

footer.appendChild(h1)

footer.style.display = 'flex';
footer.style.flexDirection = 'row-reverse';
footer.style.alignItems = 'center';
footer.style.justifyContent = 'space-between';
