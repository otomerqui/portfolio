//Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul')


//Eventos
eventListeners();
function eventListeners() {
    
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto)
}



//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto( cantidad) {
        //extrayendo los valores
        const {presupuesto, restante} = cantidad;

        //Agregar valores al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en el HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario);


        //Quitar mensaje del HTML
        setTimeout( () => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos) {
        
        this.limpiarHTML(); //Elimina HTML previo

        //Iterar sobre los gastos
        gastos.forEach( gasto => {
            const {cantidad, nombre, id} = gasto;
            

            //Crear LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center"
            nuevoGasto.dataset.id = id;
            //console.log(nuevoGasto);

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$${cantidad}</span>      
            
            `;

            //Botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Delete &times';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while( gastoListado.firstChild ) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    acturalizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if( (presupuesto / 4) > restante) {
            
            ui.imprimirAlerta('You have spent more than 75% of the budget', 'error');
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
           
        } else if((presupuesto / 2) > restante)  {
            ui.imprimirAlerta('You have spent more than 50% of the budget', 'error');
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //Si el total es menor a cero
        if(restante <= 0) {
            ui.imprimirAlerta('The budget has been exhausted', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        } 
    }
}

//Instanciar
const ui = new UI();
let presupuesto;

//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿What is your budget?');

    //console.log(presupuestoUsuario);

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
    
}

// Agregar gastos
function agregarGasto(e) {
    e.preventDefault();

    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);


    //validar
    if(nombre ==='' || cantidad === '') {
        ui.imprimirAlerta('Both fields are required', 'error');
        return;
    } else if( cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Invalid amount', 'error');
        return;
    }

    //Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now()};

    //Añade el nuevo gasto
    presupuesto.nuevoGasto( gasto);

    //Mensaje de gasto agregado correctamente
    ui.imprimirAlerta('Expense added correctly');

    //Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos( gastos );

    ui.acturalizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    //Reinicia el formulario
    formulario.reset();    

}

function eliminarGasto(id) {
    //Elimina los gastos de la clase
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    const { gastos, restante} = presupuesto;
    
    ui.mostrarGastos(gastos);
    ui.acturalizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

    // Habilitar el botón si el restante es mayor que cero
    if (restante > 0) {
        const btnAgregar = document.querySelector('button[type="submit"]');
        btnAgregar.disabled = false;        
    }
}