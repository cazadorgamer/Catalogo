document.addEventListener('DOMContentLoaded', () => {
    const inputBusqueda = document.getElementById('input-busqueda');
    const sugerencias = document.getElementById('sugerencias');

    // Simular una lista de productos con imágenes (puedes obtenerla de una fuente de datos real)
    const listaProductos = [
        { nombre: 'cerveza palermo', imagenId: 'cerveza palermo' },
        { nombre: 'coca vidrio', imagenId: 'coca vidrio' },
        { nombre: 'manaos', imagenId: 'manaos' },
        { nombre: 'lata sneider', imagenId: 'sneider' },
        { nombre: 'lata gancia', imagenId: 'gancia' },
        { nombre: 'lata anstel', imagenId: 'anstel' },
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
            const nombre = document.createElement('span');
            nombre.textContent = producto.nombre;

            // Agregar un manejador de eventos para desplazar la página a la imagen específica
            listItem.addEventListener('click', () => {
                const imagen = document.getElementById(producto.imagenId);
                if (imagen) {
                    imagen.scrollIntoView({ behavior: 'smooth' }); // Desplazar suavemente hacia la imagen específica
                }
            });

            listItem.appendChild(nombre);
            sugerencias.appendChild(listItem);
        });
    }
});

