//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//console.log(color);

//Generar un objeto con los datos de búsqueda
const datosbusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los autos al cargar  

    //Llena las opciones de años
    llenarSelect();
})

//Event listener para los selects de búsqueda 
marca.addEventListener('change', (e) => {
    datosbusqueda.marca = e.target.value;     
    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosbusqueda.year = e.target.value;
    filtrarAuto();    
});

minimo.addEventListener('change', (e) => {
    datosbusqueda.minimo = e.target.value; 
    filtrarAuto();   
});

maximo.addEventListener('change', (e) => {
    datosbusqueda.maximo = e.target.value;
    filtrarAuto();       
});

puertas.addEventListener('change', (e) => {
    datosbusqueda.puertas = e.target.value;
    filtrarAuto();     
});

transmision.addEventListener('change', (e) => {
    datosbusqueda.transmision = e.target.value;
    console.log(e.target.value);
    filtrarAuto();        
});

color.addEventListener('change', (e) => {
    datosbusqueda.color = e.target.value;
    console.log(e.target.value);
    filtrarAuto();         
});







//Funciones
function mostrarAutos(autos) {
    
    limpiarHTML(); //Elimina HTML previo
    autos.forEach( auto => {
        const autoHTML = document.createElement('FIGURE');
        autoHTML.classList.add('resultados');

        autoHTML.innerHTML = `
        <img src="${auto.imagen}" class="img-fluid tm-gallery-img">
        <figcaption>
            <h4 class="tm-gallery-title">${auto.marca} ${auto.modelo} ${auto.year} </h4>
            <p class="tm-gallery-price">Price: $ ${auto.precio}</p>
            <p class="resultados-text">${auto.puertas} Doors - Transmission:  ${auto.transmision} - Color:  ${auto.color} </p>
            <a href="#" class="flex"><button type="button">More Info</button></a>
            
        </figcaption>         

        `;

        //Insertar  HTML
        resultado.appendChild(autoHTML);
    })
}

//Limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect() {
    for (let i=max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega opciones de año al select
    }
   
}

//Función que filtra en base a la búsqueda

function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ). filter( filtrarMinimo ).filter( filtrarMaximo).filter( filtrarPuertas ). filter( filtrarTransmision).filter( filtrarColor);
    //console.log(resultado);

    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }    
}

function noResultado() {
    
    limpiarHTML();

    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'There is no results for the search, try another search terms';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    if(datosbusqueda.marca) {
        return auto.marca === datosbusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    if(datosbusqueda.year) {
        return auto.year === parseInt(datosbusqueda.year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosbusqueda.minimo) {
        return auto.precio >= datosbusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    if(datosbusqueda.maximo) {
        return auto.precio <= datosbusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    if(datosbusqueda.puertas) {
        return auto.puertas === parseInt(datosbusqueda.puertas);
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosbusqueda.transmision) {
        return auto.transmision === datosbusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    if(datosbusqueda.color) {
        return auto.color === datosbusqueda.color;
    }
    return auto;
}