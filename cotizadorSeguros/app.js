
//Crear Objeto seguro
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}


document.addEventListener('DOMContentLoaded', () => {
    

    //Llena las opciones de años
    llenarOpciones();
})

//Función Realiza la cotización con los datos

function calcularSeguro(seguro) {
     /*
    1. Americano 1.15
    2.Asiatico 1.05
    3. Europeo 1.35
    */
   
   let cantidad;
   const base = 2000;
   
   switch(this.marca.value) {
    case '1':
        cantidad = base*1.15;
        break;
    case '2':
        cantidad = base*1.05;
        break;
    case '3':
        cantidad = base*1.35;
        break;
   }

   
   //Leer el año
   const diferencia = new Date().getFullYear() - this.year.value;
  

   //Cada año el costo va a reducirse un 3%
   cantidad -= (( diferencia * 3) * cantidad) / 100;

  
   
   /* 
   Si el seguro es básico se mulstiplica por 30% más
   Si el seguro es completo se mulstiplica por 50% más
   */
   
   //console.log(seguro);
 
   if(seguro.tipo === 'basic') {
    cantidad *= 1.30;       
    } else  {
    cantidad *= 1.50; 
    }

return cantidad;
   


}

//Función event listener
eventListener();
function eventListener() {
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', cotizarSeguro);
}

//Función cotizar seguro
function cotizarSeguro(e) {
    e.preventDefault();
    

    //Leer marca seleccionada
    const marca = document.querySelector('#marca').value;    

    //Leer año seleccionado
    const year = document.querySelector('#year').value;    

    //leer tipo de cobertura
    const tipo = document.querySelector('input[type="radio"]:checked').value;
    //console.log(tipo);

    if(marca === '' || year === '' || tipo === '') {
        mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    }

    mostrarMensaje('Cotizando', 'exito');

    //Ocultar cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null) {
        resultados.remove();
    }

    //Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo);
    //console.log(seguro);
    
    const total = calcularSeguro(seguro);
    //console.log(seguro);
    mostrarResultado(seguro,total);
}

function mostrarResultado(seguro,total) {
    //console.log('desde mostrar resultado');

    let textoMarca;
    switch(seguro.marca) {
        case '1':
            textoMarca = 'American';
            break;
        case '2':
            textoMarca = 'Asian';
            break;
        case '3':
            textoMarca = 'European';
            break;   

        default:
            break;
    }
    //console.log(textoMarca);
    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';//Se borra spinner y muestra el resultado
       
    }, 3000);
    
    
    //Crear el resultado
    setTimeout(() => {
        const div = document.createElement('div');
        div.classList.add('mt-10');
        div.innerHTML = `
            <p class="header"> Quotation</p>
            <p class="font-bold">Car type: <span class="font-normal"> ${textoMarca} </span></p>
            <p class="font-bold">Year: <span class="font-normal"> ${seguro.year} </span></p>
            <p class="font-bold">Insurance type: <span class="font-normal capitalize"> ${seguro.tipo} </span></p>
            <p class="font-bold">Total: <span class="font-normal"> $ ${total} </span></p>
        `;
        const resultadoDiv = document.querySelector('#resultado');
        resultadoDiv.appendChild(div);
    }, 3000);
    

    
}

//Función para mostrar mensajes de alerta en pantalla
function mostrarMensaje(mensaje, tipo) {
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    div.classList.add('mensaje');
    div.textContent = mensaje;

    //Insertar el HTML
    const formulario = document.querySelector('#formulario');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    //Eliminar mensaje
    setTimeout(() => {
        div.remove();
    }, 3000);
}

//Función llenar opciones de años
function llenarOpciones() {
    const max = new Date().getFullYear();
    const min = max -20;
    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        selectYear.appendChild(opcion);
    }
}