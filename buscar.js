// Definir un array de objetos
var bebida = [
  { nombre: "cerveza palermo", precio: 460, Imagen: document.getElementById("imagen palermo") },
  { nombre: "palermo", precio: 460, Imagen: document.getElementById("imagen palermo")},
  { nombre: "lata sneider", precio: 300,Imagen:document.getElementById("imagen palermo") },
  { nombre: "sneider", precio: 300, Imagen: document.getElementById("imagen palermo")},
  { nombre: "lata gancia", precio: 360,Imagen:document.getElementById("imagen palermo") },
  { nombre: "gancia", precio: 360,Imagen:document.getElementById("imagen palermo") },
  { nombre: "manaos", precio: 290,Imagen:document.getElementById("imagen palermo") },
  { nombre: "coca cola", precio: 400,Imagen:document.getElementById("imagen palermo") }
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
   var resultadoHTML = "Nombre: " + personaEncontrada.nombre + "<br>Precio: " + personaEncontrada.precio + "<br>";
   resultadoContainer.innerHTML = resultadoHTML;

   
 } else {
   resultadoContainer.innerHTML = "No se encontró ninguna persona con ese nombre.";
 }
}
















