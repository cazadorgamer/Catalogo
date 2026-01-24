document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    let carrito = [];

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    listaCarrito.addEventListener('click', eliminarDelCarrito);

    function agregarAlCarrito(e) {
        const producto = e.target.closest('.product');
        if (!producto) return;

        const id = producto.dataset.id;
        const nombre = producto.dataset.nombre;
        const precio = parseFloat(producto.dataset.precio);

        if (!id || !nombre || isNaN(precio)) {
            console.error('Producto mal configurado');
            return;
        }

        const existente = carrito.find(item => item.id === id);

        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push({
                id,
                nombre,
                precio,
                cantidad: 1
            });
        }

        mostrarCarrito();
    }

    function eliminarDelCarrito(e) {
        if (!e.target.classList.contains('eliminar-item')) return;

        const id = e.target.dataset.id;
        carrito = carrito.filter(item => item.id !== id);
        mostrarCarrito();
    }

    function mostrarCarrito() {
        listaCarrito.innerHTML = '';

        carrito.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.nombre} x ${item.cantidad} 
                - $${(item.precio * item.cantidad).toFixed(2)}
                <button class="eliminar-item" data-id="${item.id}">❌</button>
            `;
            listaCarrito.appendChild(li);
        });

        const total = carrito.reduce(
            (acc, item) => acc + item.precio * item.cantidad,
            0
        );

        totalElement.textContent = total.toFixed(2);
    }
});
