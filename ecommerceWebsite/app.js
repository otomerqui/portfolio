// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#carrito #lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaProductos = document.querySelector('#lista-productos');
let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregar un producto al presionar add to cart
    listaProductos.addEventListener('click', agregarProducto);


    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarProducto);

    //Obtiene datos de local storage cuando se recarga
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })

    // vaciar el carrito 
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHTML(); // limpiamos el HTML
    })
}


//Funciones

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
   
}

//Elimina producto del carrito
function eliminarProducto(e) {
    
    if(e.target.classList.contains('borrar-producto')) {
         const productoId = e.target.getAttribute('data-id');

         //Elimina del arreglo de articulos por data-id
         articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId );
         
         carritoHTML(); // iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del HTML al que dimos click y extrae la información del producto

function leerDatosProducto(producto) {
    //console.log(producto);
    //crear objeto con contenido del producto actual/seleccionado
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('p').textContent,
        id: producto.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( producto => producto.id === infoProducto.id);
    //console.log(existe);
    if(existe)  {
        //Actualizamos la cantidad en el carrito
        const productos =  articulosCarrito.map( producto => {
            if(producto.id === infoProducto.id) {
                producto.cantidad++;                
                return producto; // retorna productos duplicados
            } else {
                return producto; // retorna productos no duplicados
            }
        });
        articulosCarrito = [...productos];  
    } else {
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
    }


    //console.log(infoProducto);    
    //console.log(articulosCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML() {
    //Limpiar el HTML
    limpiarHTML();

    //recorre el carrito y genera el HTML
    articulosCarrito.forEach( producto =>  {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${producto.imagen}"></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td> <a href="#" class="borrar-producto" data-id="${producto.id}"> X </a></td>
         `;

        //agregar el HTML de carrito en el tbody
        contenedorCarrito.appendChild(row);

    });

    //Sincronizar carrito con local storage
    sincronizarStorage();
}

//Sincronizar carrito con local storage
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML() {
    //forma lenta de limpiar HTML
    //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }


}

