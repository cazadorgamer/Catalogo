document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.getElementById('input-busqueda');
    const sugerencias = document.getElementById('sugerencias');

    // Simular una lista de productos con imágenes (puedes obtenerla de una fuente de datos real)
    const listaProductos = [
        { nombre: 'cerveza Palermo', imagen: 'palermo.jpg' },
        
        { nombre: 'cerveza sneider', imagen: 'img/Cerveza-Schneider-Lata-473Ml-1-12957.webp' },
        { nombre: 'cerveza anstel', imagen: 'img/anstel.jpg' },
        { nombre: 'gaseosa manaos', imagen:'img/manaos.webp' },
        
        { nombre: 'gaseosa coca cola', imagen: 'img/coca vidrio.jpg' },
        { nombre: 'latas gancia', imagen:  'img/latas gancia.webp' },
        { nombre: 'latas sneider', imagen: 'img/Cerveza-Schneider-Lata-473Ml-1-12957.webp' },
        { nombre: 'latas anstel', imagen: 'img/anstel.jpg' },
        // Agrega más productos aquí
    ];

    inputBusqueda.addEventListener('input', mostrarSugerencias);

    function mostrarSugerencias() {
        const textoBusqueda = inputBusqueda.value.toLowerCase();
        sugerencias.innerHTML = '';

        if (textoBusqueda === '') {
            // El campo de búsqueda está vacío, no se muestran sugerencias
            return;
        }
        const sugerenciasFiltradas = listaProductos.filter(producto => producto.nombre.toLowerCase().includes(textoBusqueda));


        sugerenciasFiltradas.forEach(producto => {
            const listItem = document.createElement('li');
            const imagen = document.createElement('img');
            imagen.src = producto.imagen;
            imagen.alt = producto.nombre;
            const nombre = document.createElement('span');
            nombre.textContent = producto.nombre;

            // Agrega un manejador de eventos para desplazar la página cuando se hace clic en una sugerencia
            listItem.addEventListener('click', () => {
                productosSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente a la sección de productos
            });

            listItem.appendChild(imagen);
            listItem.appendChild(nombre);
            sugerencias.appendChild(listItem);
        });
    }
});
