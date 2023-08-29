const btnInput = document.querySelectorAll('.input');
const btnAction = document.querySelectorAll('.action');
const screen = document.querySelector('.screen');
const btnEqual = document.querySelector('.equal');
const btnClear = document.querySelector('.clear');

let activeScreen = '';
console.log(btnClear);




// read values of the inputs
btnInput.forEach( input => {
    input.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        screenText = e.target.innerText;
        activeScreen += screenText;
        screen.innerText = activeScreen;
        console.log(activeScreen);       
       
    });
});

btnAction.forEach( action => {
    action.addEventListener("click", (e) => {
        
        console.log(e.target.innerText);
        screenText = e.target.innerText;
        activeScreen += screenText;
        screen.innerText = activeScreen;
        console.log(activeScreen);        
    });
});

//Compute the math operation and show result
btnEqual.addEventListener('click', (e) => {
    //console.log(activeScreen.join(''));
    result = eval(String(activeScreen));
    //console.log(result);
    screen.innerText = result;   
})

//Clear the screen
btnClear.addEventListener('mouseup', (e) => {
    //console.log('desde botón borrar');
    console.log(e)
    activeScreen = '';
    screen.innerText = activeScreen;
    location.reload();
    
    
})