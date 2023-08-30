// Definir un array de objetos
var bebida = [

  { nombre: "cerveza palermo", precio: 700 },
  { nombre: "palermo", precio: 750 },
  { nombre: "lata sneider", precio: 480 },
  { nombre: "sneider", precio: 480 },
  { nombre: "lata anstel", precio: 460 },
  { nombre: "anstel", precio: 460 },
  { nombre: "lata gancia", precio: 400 },
  { nombre: "gancia", precio: 400 },
  { nombre: "manaos", precio: 400 },
  { nombre: "coca cola", precio: 500 }


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
 resultadoContainer.innerHTML = "";

 if (personaEncontrada) {

   var resultadoHTML = "Nombre: " + personaEncontrada.nombre + "<br>Precio: " + personaEncontrada.precio + "<br>";

   resultadoContainer.innerHTML = resultadoHTML;

   
 } else {
   resultadoContainer.innerHTML = "No se encontró el producto";

 }
}
















