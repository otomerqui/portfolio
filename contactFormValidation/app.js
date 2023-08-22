document.addEventListener('DOMContentLoaded', function() {

    //Objeto Email
    const email = {
        name: '',
        email: '',
        contact: '',
        message: ''        
    }
    

    //Seleccionar los datos del formulario
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputContact = document.querySelector('#contact');
    const inputMessage = document.querySelector('#message');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //console.log(btnReset);

    // Asignar eventos
    inputName.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputContact.addEventListener('blur', validar);
    inputMessage.addEventListener('blur', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

        //reiniciar el objeto
        resetFormulario();
    })

    function enviarEmail(e) {
        e.preventDefault();
        spinner.style.display = 'block';

        //Simulando envío
        setTimeout(() => {
            spinner.style.display = 'none';

            resetFormulario();

            //Crear alerta de envío exitoso
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('alerta-envio');
            alertaExito.textContent = 'The message has been sent'
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 2000)
        }, 2000);
    }

    function validar(e) {
        //console.log(e.target.parentElement);
        if(e.target.value.trim() === '') {
            mostrarAlerta(`The field ${e.target.id} is required`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();            
            return;
        } 
        
        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('Invalid email', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };

        limpiarAlerta(e.target.parentElement);

        // Asignar valores al objeto Email
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto Email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        //Comprueba si ya existe una alerta
        limpiarAlerta(referencia);
            
        
        //Generar Alerta en HTML   
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('alerta');

        //Inyectar error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.alerta');    
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        console.log(email);
        if(Object.values(email).includes('')) {
            btnSubmit.classList.remove('color');
            btnSubmit.disabled = true; 
        } else {
            btnSubmit.classList.add('color');
            btnSubmit.disabled = false; 
        }
    }

    function resetFormulario() {
        //reiniciar el objeto
        email.name = '';
        email.email = '';
        email.contact = '';
        email.message = '';
        formulario.reset();
        comprobarEmail();        
    }

})