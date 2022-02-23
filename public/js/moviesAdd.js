window.onload = function(){

    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    function colorAlAzar(...colores){  /* ...colores me devuelve un array con todos los colores que guardemos en colorAlAzar*/

        let random = Math.floor((Math.random() * (5-0))+0);
        let colorRandom = colores[random]
        return colorRandom
    } 

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = colorAlAzar('red', 'blue', 'orange', 'brown', 'yellow'); 
    }) 

}