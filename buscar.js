// Definir un array de objetos
var bebida = [
<<<<<<< HEAD
  { nombre: "cerveza palermo", precio: 500 },
  { nombre: "lata sneider", precio: 300 },
  { nombre: "lata gancia", precio: 360 },
  { nombre: "manaos", precio: 320 }
=======
  { nombre: "cerveza palermo", precio: 460, Imagen: document.getElementById("imagen palermo") },
  { nombre: "palermo", precio: 460, Imagen: document.getElementById("imagen palermo")},
  { nombre: "lata sneider", precio: 300,Imagen:document.getElementById("imagen palermo") },
  { nombre: "sneider", precio: 300, Imagen: document.getElementById("imagen palermo")},
  { nombre: "lata gancia", precio: 360,Imagen:document.getElementById("imagen palermo") },
  { nombre: "gancia", precio: 360,Imagen:document.getElementById("imagen palermo") },
  { nombre: "manaos", precio: 290,Imagen:document.getElementById("imagen palermo") },
  { nombre: "coca cola", precio: 400,Imagen:document.getElementById("imagen palermo") }
>>>>>>> b50734d2f1073dbd1671aa3aa387a1e981f942cb
];

// Función de búsqueda y mostrar en HTML
function buscarPersona() {
  // Obtener el valor del input de nombre
  var nombreBusqueda = document.getElementById("nombre-input").value;

  // Buscar la persona en el array
  var personaEncontrada = bebida.find(function(bebida) {
    return bebida.nombre.toLowerCase() === nombreBusqueda.toLowerCase();
  });

  // Mostrar el resultado en el HTML
  var resultadoContainer = document.getElementById("resultado-container");


 // Mostrar el resultado en el HTML
 var resultadoContainer = document.getElementById("resultado-container");
 resultadoContainer.innerHTML = "";


 if (personaEncontrada) {
<<<<<<< HEAD
   var resultadoHTML = "Bebida: " + personaEncontrada.nombre + "<br>Precio: " + personaEncontrada.precio;
=======
   var resultadoHTML = "Nombre: " + personaEncontrada.nombre + "<br>Precio: " + personaEncontrada.precio + "<br>";
>>>>>>> b50734d2f1073dbd1671aa3aa387a1e981f942cb
   resultadoContainer.innerHTML = resultadoHTML;

   
 } else {
<<<<<<< HEAD
   resultadoContainer.innerHTML = "No se encontró ninguna bebida con ese nombre.";
=======
   resultadoContainer.innerHTML = "No se encontró el producto";
>>>>>>> b50734d2f1073dbd1671aa3aa387a1e981f942cb
 }
}
















