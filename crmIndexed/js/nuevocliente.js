(function() {
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {

        conectarDB().then(() => {
            formulario.addEventListener('submit', validarCliente);
        });
    });

   

    function validarCliente(e) {
        e.preventDefault();

        //console.log('Desde validar cliente');

        //leer todos los inputs 
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;        

        if(nombre === '' || email === '' || telefono === '' || empresa === '') {
            
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        //Crear un objeto
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()
        }
        
        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente) {
        if (!DB) {
            console.error('La base de datos no está inicializada');
            return;
        }
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        const request = objectStore.add(cliente);

        request.onerror = function() {
            imprimirAlerta('Hubo un error', 'error');
        }

        request.onsuccess = function() {
            imprimirAlerta('El cliente se agregó correctamente');
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        }
    }      

})();