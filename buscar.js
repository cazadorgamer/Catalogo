// Definir un array de objetos
var bebida = [
  { nombre: "cerveza palermo", precio: 460 },
  { nombre: "lata sneider", precio: 300 },
  { nombre: "lata gancia", precio: 360 },
  { nombre: "manaos", precio: 290 }
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
   var resultadoHTML = "Nombre: " + personaEncontrada.nombre + "<br>Precio: " + personaEncontrada.precio;
   resultadoContainer.innerHTML = resultadoHTML;
 } else {
   resultadoContainer.innerHTML = "No se encontró ninguna persona con ese nombre.";
 }
}
















