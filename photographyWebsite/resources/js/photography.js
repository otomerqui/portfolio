const joinUs = document.querySelector('nav.desktop ul .button');
const joinUsMobile = document.querySelector('nav.mobile ul .button');
const signUpMobile = document.querySelector('#sign-up-cta-mobile');
const signUp = document.querySelector('#sign-up-cta');

console.log(signUpMobile);

/*
joinUs.addEventListener('click', () => {
    console.log('Diste clic en el botón');
});*/


joinUs.addEventListener('click', mostrarOcultarCta);
joinUsMobile.addEventListener('click', mostrarOcultarCta);

function mostrarOcultarCta() {
    if (signUpMobile.classList.contains('activo')) {
        signUpMobile.classList.remove('activo');
        signUp.style.display = 'block';
    } else {
        signUpMobile.classList.add('activo');
        signUp.style.display = 'none';
       

    }
    
}


