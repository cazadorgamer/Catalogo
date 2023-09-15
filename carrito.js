document.addEventListener('DOMContentLoaded', () => {
    const agregarCarritoButtons = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    let carrito = [];

    agregarCarritoButtons.forEach(button => {
        button.addEventListener('click', agregarAlCarrito);
    });

    function agregarAlCarrito(event) {
        const producto = event.target.parentElement;
        const productoId = producto.getAttribute('data-id');
        const productoNombre = producto.getAttribute('data-nombre');
        const productoPrecio = parseFloat(producto.getAttribute('data-precio'));

        const productoEnCarrito = carrito.find(item => item.id === productoId);

        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            carrito.push({
                id: productoId,
                nombre: productoNombre,
                precio: productoPrecio,
                cantidad: 1
            });
        }

        mostrarCarrito();
    }

    function mostrarCarrito() {
        listaCarrito.innerHTML = '';

        carrito.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${item.precio * item.cantidad}`;
            listaCarrito.appendChild(listItem);
        });

        const total = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
        totalElement.textContent = total.toFixed(2);
    }
});
