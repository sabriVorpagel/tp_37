window.addEventListener('load', () => { 

    let h1 = document.querySelector('h1');
    let section = document.querySelector('section');
    let article = document.querySelector('article');

    h1.innerText = "AGREGAR PELÍCULAS";

    h1.classList.add('titulo');

    section.classList.add('fondoCRUD');

    article.classList.add('fondoTransparente');

})