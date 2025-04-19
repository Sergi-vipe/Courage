// Variables
const listaCarrito = document.getElementById('lista-carrito');
const totalElement = document.getElementById('total');
const subtotalElement = document.getElementById('subtotal');
const gastosEnvioElement = document.getElementById('gastos-envio');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const gastosEnvio = 5.99; // Gasto de envío fijo

// Recuperamos el carrito desde localStorage si existe
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el carrito
function actualizarCarrito() {
    // Limpiar la lista actual
    listaCarrito.innerHTML = '';

    let subtotal = 0;

    // Generar la lista de productos en el carrito
    carrito.forEach(item => {
        console.log(item.imagen); // Verifica la URL de la imagen
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="card-cesta">   
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="card-cesta-info">
                    <div class="producto-info">
                        <h2>${item.nombre}</h2>
                        <h3>€${item.precio}</h3>
                    </div>
                    <h3>Talla L - Hombre</h3>
                    <p>Este producto se ha confeccionado con, al menos, un 20 % de materiales reciclados</p>
                    <div class="cantidad-container">
                        <button class="restar" onclick="restarCantidad(${item.id})">-</button>
                        <span class="cantidad">${item.cantidad}</span>
                        <button class="agregar" onclick="agregarCantidad(${item.id})">+</button>
                        <button class="eliminar" onclick="eliminarProducto(${item.id})"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
        listaCarrito.appendChild(li);

        subtotal += item.precio * item.cantidad;
    });

    // Actualizar el subtotal
    subtotalElement.textContent = subtotal.toFixed(2);

    // Calcular el total sumando los gastos de envío
    const total = subtotal + gastosEnvio;

    // Mostrar los gastos de envío y el total
    gastosEnvioElement.textContent = gastosEnvio.toFixed(2);
    totalElement.textContent = total.toFixed(2);

    // Guardamos el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para agregar productos al carrito
function agregarProducto(id, nombre, precio, imagen) {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        productoExistente.cantidad += 1; // Si existe, sumar cantidad
    } else {
        carrito.push({ id, nombre, precio, imagen, cantidad: 1 }); // Si no, agregarlo
    }

    // Actualizamos el carrito y guardamos en localStorage
    actualizarCarrito();
}

// Función para agregar más unidades de un producto
function agregarCantidad(id) {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad += 1;
        actualizarCarrito();
    }
}

// Función para restar unidades de un producto
function restarCantidad(id) {
    const producto = carrito.find(item => item.id === id);
    if (producto && producto.cantidad > 1) {
        producto.cantidad -= 1;
        actualizarCarrito();
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// Función para vaciar el carrito
vaciarCarritoBtn.addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
});

// Agregar productos al carrito al hacer clic
const botonesAgregar = document.querySelectorAll('.agregar');
botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const producto = e.target.closest('.producto');
        const id = producto.getAttribute('data-id');
        const nombre = producto.getAttribute('data-nombre');
        const precio = parseFloat(producto.getAttribute('data-precio'));
        const imagen = producto.getAttribute('data-imagen');
        agregarProducto(parseInt(id), nombre, precio, imagen);
    });
});

// Cargar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    if (carrito.length > 0) {
        actualizarCarrito();
    }
});

window.agregarProducto = agregarProducto;
window.agregarCantidad = agregarCantidad;
window.restarCantidad = restarCantidad;
window.eliminarProducto = eliminarProducto;

