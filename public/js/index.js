/* window.onload = function () {
    document.querySelector('main').style.display = 'block';

    let $form = document.querySelector('form');
    let $input = document.querySelector('input');

    $form.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
    })

    $input.addEventListener('keypress', (event) => {
        console.log('Presionaste la tecla ' + event.key)
    })

} PRACTICA EN CLASE */ 







window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    
    container.style.display = 'block';
    
} 