const tabElements = document.querySelectorAll('button[role="tab"]');
const panelElements = document.querySelectorAll('[role="tabpanel"]');
let activeIndex = 0;

//console.log(tabElements);

// Listen to clicks on tabs
tabElements.forEach(function (tab, index) {
  tab.addEventListener("click", function (e) {
    //console.log(index);
    setActiveTab(index);
  });
});

function setActiveTab(index) {
  // Make currently active tab inactive
  tabElements[activeIndex].setAttribute("aria-selected", "false");

  // Set the new tab as active
  tabElements[index].setAttribute("aria-selected", "true");
  //console.log(tabElements[index]);

  setActivePanel(index);
  activeIndex = index;
};

function setActivePanel(index) {
  // Hide currently active panel  
  panelElements[activeIndex].style.display = 'none';
  

  // Show the new active panel  
  panelElements[index].style.display = 'flex';
  //console.log(panelElements[index]);
}



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







/*
const skillSection = document.querySelector('section#skills_menu');
const myBars = document.querySelectorAll(".myBar");
let animationExecuted = false;

window.addEventListener("scroll", () => {
  const rect = skillSection.getBoundingClientRect();
  console.log(window.innerHeight);
  console.log(rect.top);
  
  // Comprueba si la sección está en la vista y si la animación aún no se ha ejecutado
  if (rect.top <= window.innerHeight && !animationExecuted) {
    move();
    animationExecuted = true; // Marcar que la animación se ha ejecutado
  } else if (rect.top > window.innerHeight) {
    // Restablecer la variable cuando el usuario sube por encima de la sección
    animationExecuted = false;
  }


});

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelectorAll(".myBar");
    elem.forEach(elementos => {
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elementos.style.width = width + "%";
        }
      }    
    });
  }
}
*/