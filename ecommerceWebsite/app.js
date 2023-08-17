// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#carrito #lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');


cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregar un producto al presionar add to cart
    listaProductos.addEventListener('click', agregarProducto)
}


//Funciones

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
   
}

// Lee el contenido del HTML al que dimos click y extrae la información del producto

function leerDatosProducto(producto) {
    console.log(producto);
    //crear objeto con contenido del producto actual/seleccionado
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('p').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoProducto);
}

