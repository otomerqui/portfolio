//Variables
const opciones = document.querySelectorAll('.opciones');
const nextBtn = document.querySelectorAll("form .button-next");  
const prevBtn = document.querySelectorAll("form .button-previous");
const steps = Array.from(document.querySelectorAll("form .step")); 
const formulario = document.querySelector('form');


//console.log(botones);


	
//Primer paso tipo de servicio	 
opciones.forEach(opcion => {
		opcion.addEventListener('click', () => {
		 
		const input = opcion.querySelector('input[name="form_fields[serviciowheels]"]');
		//console.log(input);
		
			
		  
		if (input) {
		  input.click(); // Simula un clic en el input		  
		  
		  resetearFondos();
		  opcion.classList.add('fondo-card');
		  opcion.querySelector('label').classList.add('label-color');
		  opcion.querySelector('img').classList.add('img-color');	
		  irFondo();
		}
		});
});
	
//Segundo paso tipo de auto
opciones.forEach(opcion => {
		opcion.addEventListener('click', () => {
		 
		const input = opcion.querySelector('input[name="form_fields[tipocoche]"]');
		//console.log(input);
		
			
		  
		if (input) {
		  input.click(); // Simula un clic en el input		  
		  
		  resetearFondos();
		  opcion.classList.add('fondo-card');
		  opcion.querySelector('label').classList.add('label-color');
		  opcion.querySelector('img').classList.add('img-color');	
		  irFondo();	  
		}
		});
});	


//Función que elimina clases de las cajas de opciones
function resetearFondos() {
		opciones.forEach(opcion => {
		opcion.classList.remove('fondo-card');
		opcion.querySelector('label').classList.remove('label-color');
		opcion.querySelector('img.imagform').classList.remove('img-color');
		});
}

//Función para mostrar descripción del input seleccionado
document.addEventListener("DOMContentLoaded", function () {
	// Obtén todos los elementos input de tipo radio
	var radioButtons = document.querySelectorAll('input[type="radio"]');
	
	// Añade un evento de clic a cada radio button
	radioButtons.forEach((radio) => {
		radio.addEventListener("click", function () {
			// Oculta todas las descripciones
			var todasLasDescripciones = document.querySelectorAll('.opciones_desc');
			todasLasDescripciones.forEach( (descripcion) => {
				descripcion.style.display = 'none';
			});

			// Muestra la descripción correspondiente al radio button seleccionado
			var indice = Array.from(radioButtons).indexOf(radio);
			var descripcionCorrespondiente = document.querySelectorAll('.opciones_desc')[indice];
			descripcionCorrespondiente.style.display = 'block';
		});
	});
});


//Función cambio de paso
function changeStep(btn, stepNumber) {  
	//console.log('desde cambio de paso');
	let index = 0;  
	const active = document.querySelector(".active");  
	index = steps.indexOf(active);

	// Validaciones específicas para cada paso
    if (stepNumber === 2) {
        // Validaciones para el paso 2
        if (btn === "next" && !validarSeleccion('form_fields[serviciowheels]')) {
            mostrarError('Please select an option in step 1.');
            return;
        }
    } else if (stepNumber === 3) {
        // Validaciones para el paso 3
        if (btn === "next" && !validarSeleccion('form_fields[tipocoche]')) {
            mostrarError('Please select an option in step 2.');
            return;
        }
    } else if (stepNumber === 4) {
        // Validaciones para el paso 4
        if (btn === "next" && !validarCampos()) {
            mostrarError('All fields are required');
            return;
        }
		window.location.href = "tkyou.html";
    } 	

	//console.log('desde pasar validación')
	irArriba();

	steps[index].classList.remove("active");  
	
	if (btn === "next") {  
	 index++;  
	} else if (btn === "prev") {  
	 index--;  
	}  
	steps[index].classList.add("active");  
}  


//Función validar que hay una selección
function validarSeleccion(nombreCampo) {
	// Obtén todas las opciones del argumento name
	var opciones = document.getElementsByName(nombreCampo);	
	
	
	// Verifica si al menos una opción está seleccionada
	var algunaSeleccionada = Array.from(opciones).some(opcion => opcion.checked);
	
	//console.log(algunaSeleccionada);
	return algunaSeleccionada;	
	
}

//Función validar que estén todos los campos llenos
function validarCampos() {
	
	const inputFechaRecogida = document.querySelector('input#form-field-field_927ad75');
	const inputHoraRecogida = document.querySelector('input#form-field-field_eadf50c');
	const inputLugarRecogida = document.querySelector('input#form-field-field_a864113');
	const inputLugarDestino = document.querySelector('input#form-field-field_421fcaf');	
	const inputName = document.querySelector('input#name');
	const inputTelefono = document.querySelector('input#form-field-field_3af8a0f');

	// Validar que el campo de teléfono contenga solo números
    const telefonoRegex = /^[0-9]+$/;
    if (!telefonoRegex.test(inputTelefono.value)) {
        mostrarError('Please enter a valid phone number');
        return false;
    }

	if (inputFechaRecogida.value.trim() === '' ||
        inputHoraRecogida.value.trim() === '' ||
        inputLugarRecogida.value.trim() === '' ||
        inputLugarDestino.value.trim() === '' || inputName.value.trim() === '' ||
        inputTelefono.value.trim() === '' ) {
        
        return false;
    }
	return true;

}

//Función validar que estén todos los campos llenos en el último paso
function validarCamposEnviar() {
	
	const inputName = document.querySelector('input#name');
	const inputTelefono = document.querySelector('input#form-field-field_3af8a0f');
	const inputEmail = document.querySelector('input#email');
	//const inputMensaje = document.querySelector('textarea#form-field-message');
	
	if (inputName.value.trim() === '' ||
        inputTelefono.value.trim() === '' ||
        inputEmail.value.trim() === '') {
        
		mostrarError('Por favor, completa todos los campos');
        return false;
    }
	return true;

}

//Función validar email
function validarEmail(email) {
	//console.log(email);
	
	const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
	const resultado = regex.test(email);
	console.log(resultado);
	
	// Mostrar error solo si el email no es válido
    if (!resultado) {
        mostrarError('Por favor ingresa un Email valido');
		return false;
    }

    return true;
}

// Función para mostrar mensaje de error
function mostrarError(mensaje) {
    
	
	const errorContainer = document.createElement('div');
	errorContainer.classList.add('alert');
    errorContainer.textContent = mensaje;
    formulario.appendChild(errorContainer);

	setTimeout(() => {
		errorContainer.remove();
	}, 2000)
}

//Función para desplazar a los botones
function irFondo() {
	
	formulario.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

//Función para desplazar a la parte de arriba del siguiente paso
function irArriba() {
	const elemento = document.querySelector('.step h2');

	elemento.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

	


