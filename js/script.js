/*
var boton = document.getElementById("ok");

boton.addEventListener("click", function() {
    var input = document.getElementById("nombre");

    var nombre = input.value;
    alert("Hola "+ nombre + "!");
});
*/

/* Fetch es una API de js que a través de su interfaz permite realizar peticiones HTTP para obtener recursos */

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) =>mostrarData(data)); 

  const mostrarData = (data) =>{
    console.log(data);

    let body= '';

    for (let i=0; i<data.length; i++){
      body += `<tr><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].body}</td></tr>`
    }

  document.getElementById('data').innerHTML = body;
  }


