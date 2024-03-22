
// Barras de progreso sección skills

const myBars = document.querySelectorAll(".myBar");
let animationExecuted = false;

window.addEventListener("scroll", () => {
  myBars.forEach(myBar => {
    const rect = myBar.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top <= windowHeight && rect.bottom >= 0 && !animationExecuted) {
      animateBar(myBar);
      
    } 
  });
});

function animateBar(myBar) {
  
  const targetWidth = myBar.getAttribute("data-width");
  let currentWidth = 0;

  if (myBar.style.width === "") {
    myBar.style.width = "0%";
  } else {
    currentWidth = parseInt(myBar.style.width, 10);
  }

  if (currentWidth < targetWidth) {
    let id = setInterval(frame, 10);

    function frame() {
      if (currentWidth >= targetWidth) {
        clearInterval(id);
      } else {
        currentWidth++;
        myBar.style.width = currentWidth + "%";
        myBar.querySelector("span").innerText = currentWidth + "%";
      }
    }
  }
}

//Navegación activa

// Obtener la URL actual
const currentURL = window.location.href;
//console.log(currentURL);

// Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll('header .container .menu a');
//console.log(navLinks);

// Recorre los enlaces y verifica si la URL coincide con la URL actual
navLinks.forEach(link => {
    if (currentURL === link.href) {
         link.classList.add('activo');  
      }
  });   








