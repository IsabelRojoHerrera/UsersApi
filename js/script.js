
/* Fetch es una API de js que a través de su interfaz permite realizar peticiones HTTP para obtener recursos */


  document.addEventListener('DOMContentLoaded', function() {
    fetchNombres();
});

function fetchNombres() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        mostrarTarjetas(data);
    })
    .catch(error => console.error('Error:', error));
}

function mostrarTarjetas(data) {
    const container = document.getElementById('tarjetas-container');
    container.innerHTML = ''; // Limpiar el contenedor

    data.forEach(user => {

        //se crea el div que será la estructura de la tarjeta.
        //Modificar en style la clase tarjeta.
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');


        //imagen
        const avatar = document.createElement('img');
        avatar.classList.add('img-avatar');
        avatar.src = "https://drive.usercontent.google.com/download?id=1uqqOiM3zyqYtDnfqH-_xovb9iZz9X5qn&export=view&authuser=0";

        //div de titulo, class titulo
        const titulo = document.createElement('div');
        titulo.classList.add('titulo');
        titulo.textContent = user.name; 

        //div de descripción class descripcion
        const descripcion = document.createElement('div');
        descripcion.classList.add('descripcion');
        descripcion.textContent = user.username; 

        //botón de website
        const botonWeb = document.createElement('button');
        botonWeb.classList.add('btn-web');
        botonWeb.textContent = "Sitio Web"

        botonWeb.addEventListener('click', function (){
            window.open(user.website);
        })
        


        


        //se agregan el texto y la descripción a la tarjeta
        tarjeta.appendChild(avatar);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(botonWeb);

        //se agrega la tarjeta al div contenedor
        container.appendChild(tarjeta);
    });
}


