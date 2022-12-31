window.addEventListener('load', (e) => {

    let main = document.querySelector('main');
    let h2 = document.querySelector('h2');
    let a = document.querySelector('a');
    let p = document.querySelector('p');
    let body = document.querySelector('body');

    let nombre = prompt("Ingrese su nombre");

    if (nombre) {
        document.querySelector(".subtitulo").innerHTML += nombre
    }else{
        document.querySelector(".subtitulo").innerHTML += "invitado"
    }

    
    
    
    
    h2.style.textTransform = "uppercase"

    a.style.color = "#E51B3E"

    let parrafos = document.querySelectorAll('p');
    parrafos.forEach((parrafo, i) => {
        if ((i + 1) % 2 === 0) {
            parrafo.classList.add("destacadoPar")
        }else{
            parrafo.classList.add("destacadoImpar")
        }
    })

    let fondo = confirm('¿Desea colocar un fondo de pantalla?');
    if(fondo){
        body.classList.add('fondo')
    }


    let container = document.querySelector('.container');
    container.style.display = "block";

})