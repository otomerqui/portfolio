
let DB;
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// Contenedor para las citas
const contenedorCitas = document.querySelector('#citas');

// Formulario nuevas citas
const formulario = document.querySelector('#nueva-cita')
formulario.addEventListener('submit', nuevaCita);

// Heading
const heading = document.querySelector('#administra');


let editando = false;

window.onload = () => {
    
    eventListeners();
    crearDB();

}


// Eventos

function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);
}

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora:'',
    sintomas: ''
}


function datosCita(e) {
    //  console.log(e.target.name) // Obtener el Input
     citaObj[e.target.name] = e.target.value;
}

// CLasses
class Citas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas = [...this.citas, cita];
    }
    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita)
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
    }
}

class UI {

    constructor({citas}) {
        this.textoHeading(citas);
    }

    imprimirAlerta(mensaje, tipo) {
        // Crea el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');
        
        // Si es de tipo error agrega una clase
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el DOM
        document.querySelector('#contenido').insertBefore( divMensaje , document.querySelector('.agregar-cita'));

        // Quitar el alert despues de 3 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
   }

   imprimirCitas() { 
       
        this.limpiarHTML();

        this.textoHeading(citas);

        //Leer el contenido de la base de datos
        const objectStore = DB.transaction('citas').objectStore('citas');

        const fnTextoHeading = this.textoHeading;

        const total = objectStore.count();
        total.onsuccess = function() {
            
            fnTextoHeading(total.result);
        }
      

        objectStore.openCursor().onsuccess = function(e) {
            
            const cursor = e.target.result;

            if(cursor) {
                    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cursor.value;

                    const divCita = document.createElement('div');
                    divCita.classList.add('cita', 'p-3');
                    divCita.dataset.id = id;
                    

                    //Scripting elementos de la cita
                    const mascotaParrafo = document.createElement('h3');
                    mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
                    mascotaParrafo.textContent = mascota;

                    const propietarioParrafo = document.createElement('p');
                    propietarioParrafo.innerHTML = `
                    <span class="font-weight-bolder">Pet owner: </span> ${propietario}            
                    `;

                    const telefonoParrafo = document.createElement('p');
                    telefonoParrafo.innerHTML = `
                    <span class="font-weight-bolder">Phone: </span> ${telefono}            
                    `;

                    const fechaParrafo = document.createElement('p');
                    fechaParrafo.innerHTML = `
                    <span class="font-weight-bolder">Date of admission: </span> ${fecha}            
                    `;

                    const horaParrafo = document.createElement('p');
                    horaParrafo.innerHTML = `
                    <span class="font-weight-bolder">Time of admission: </span> ${hora}            
                    `;

                    const sintomasParrafo = document.createElement('p');
                    sintomasParrafo.innerHTML = `
                    <span class="font-weight-bolder">Symptoms: </span> ${sintomas}            
                    `;

                    //Botón para eliminar esta cita
                    const btnELiminar = document.createElement('button');
                    btnELiminar.classList.add('btn', 'btn-danger', 'mr-2');
                    btnELiminar.innerHTML = 'Delete <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>';
                    btnELiminar.onclick = () => eliminarCita(id);

                    //Añade un botón para editar
                    const btnEditar = document.createElement('button');
                    const cita = cursor.value;
                    btnEditar.classList.add('btn', 'btn-info');
                    btnEditar.innerHTML = 'Update <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"></path></svg>';
                    btnEditar.onclick = () => cargarEdicion(cita);

                    //Agregar los parrafos al div cita
                    divCita.appendChild(mascotaParrafo);
                    divCita.appendChild(propietarioParrafo);
                    divCita.appendChild(telefonoParrafo);
                    divCita.appendChild(fechaParrafo);
                    divCita.appendChild(horaParrafo);
                    divCita.appendChild(sintomasParrafo);
                    divCita.appendChild(btnELiminar);
                    divCita.appendChild(btnEditar);


                    //Agregar las citas al HTML
                    contenedorCitas.appendChild(divCita);

                    //Ve al siguiente elemento en la base de datos
                    cursor.continue();
            }
        }
   }

   textoHeading(resultado) {
        
        if(resultado > 0 ) {
            heading.textContent = 'Manage your records '
        } else {
            heading.textContent = 'There are no admissions, start by creating the first one'
        }
    }

   limpiarHTML() {
        while(contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
   }
}


const administrarCitas = new Citas();
const ui = new UI(administrarCitas);


function nuevaCita(e) {
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // Validar
    if( mascota === '' || propietario === '' || telefono === '' || fecha === ''  || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta('All inputs are required', 'error');

        return;
    }

    if(editando) {
        // Estamos editando
        administrarCitas.editarCita( {...citaObj} );

        //Edita en indexDB
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');

        objectStore.put(citaObj);

        transaction.oncomplete = () => {
            ui.imprimirAlerta('Saved correctly');

            formulario.querySelector('button[type="submit"]').textContent = 'Add Record';

            editando = false;
        }

        transaction.onerror = () => {
            console.log('There was an error');
        }

        

    } else {
        // Nuevo Registro

        // Generar un ID único
        citaObj.id = Date.now();
        
        // Añade la nueva cita
        administrarCitas.agregarCita({...citaObj});

        //Insertar registro en indexedDB
        const transaction = DB.transaction(['citas'], 'readwrite');

        //Habilitar el objectStore
        const objectStore = transaction.objectStore('citas');

        //Insertar en la base de datos
        objectStore.add(citaObj);

        transaction.oncomplete = function() {
            console.log('Record added');            
            
            // Mostrar mensaje de que todo esta bien...
            ui.imprimirAlerta('was added successfully')
        }

        
    }


    // Imprimir el HTML de citas
    ui.imprimirCitas();

    // Reinicia el objeto para evitar futuros problemas de validación
    reiniciarObjeto();

    // Reiniciar Formulario
    formulario.reset();

}

function reiniciarObjeto() {
    // Reiniciar el objeto
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}


function eliminarCita(id) {
    
    const transaction = DB.transaction(['citas'], 'readwrite');
    const objectStore = transaction.objectStore('citas');

    objectStore.delete(id);

    transaction.oncomplete = () => {
        console.log(`Record ${id} deleted... `);
        ui.imprimirCitas();
    }

    transaction.onerror = () => {
        console.log('Hubo un error');
    }
}

function cargarEdicion(cita) {

    const {mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Reiniciar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Llenar los Inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    formulario.querySelector('button[type="submit"]').textContent = 'Save changes';

    editando = true;

}

function crearDB() {
    //Crear la base de datos versión 1.0
    const crearDB = window.indexedDB.open('citas', 1);


    //Si hay un error
    crearDB.onerror = function() {
        console.log('There was an error');
    }

    //Si todo sale bien
    crearDB.onsuccess = function() {
        console.log('database created successfully');
        
        DB = crearDB.result;
        
        //Mostrar citas al cargar (pero indexedDB ya esta listo)
        ui.imprimirCitas();
    }

    //Definir el schema 
    crearDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex( 'mascota', 'mascota', { unique: false} );
        objectStore.createIndex( 'propietario', 'propietario', { unique: false} );
        objectStore.createIndex( 'telefono', 'telefono', { unique: false} );
        objectStore.createIndex( 'fecha', 'fecha', { unique: false} );
        objectStore.createIndex( 'hora', 'hora', { unique: false} );
        objectStore.createIndex( 'sintomas', 'sintomas', { unique: false} );
        objectStore.createIndex( 'id', 'id', { unique: true} );

        console.log('database created and ready');
    }
}