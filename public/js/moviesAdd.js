window.onload = function(){

    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    function colorAlAzar(...colores){ /* ...colores me devuelve un array con todos los colores que guardemos en colorAlAzar*/

        let random = Math.floor((Math.random() * (5-0))+0);
        let colorRandom = colores[random]
        return colorRandom
    } 

    titulo.addEventListener('mouseover', () => {
        titulo.style.color = colorAlAzar('red', 'blue', 'orange', 'brown', 'yellow'); 
    }) 



    let $inputTitulo = document.querySelector('#titulo');
    let estadoSecreto = 0;

    $inputTitulo.addEventListener('keydown', (event) => {
        switch (true) { /* switch compara el true con los case */
            case event.key == 's' && estadoSecreto == 0:
                estadoSecreto = 1;
                break;
            case event.key == 'e' && estadoSecreto == 1:
                estadoSecreto = 2;
                break;
            case event.key == 'c' && estadoSecreto == 2:
                estadoSecreto = 3;
                break;
            case event.key == 'r' && estadoSecreto == 3:
                estadoSecreto = 4;
                break;
            case event.key == 'e' && estadoSecreto == 4:
                estadoSecreto = 5;
                break;
            case event.key == 't' && estadoSecreto == 5:
                estadoSecreto = 6;
                break;
            case event.key == 'o' && estadoSecreto == 6:
                estadoSecreto = 0;
                alert('SECRETO MAGICO')
                break;
            default:
                estadoSecreto = 0;
        }
    })
   
}