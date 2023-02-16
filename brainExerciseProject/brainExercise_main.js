let resetButton = document.getElementById('reset');


const letters = ['I','D','J'];
//generate a number between 0 and 2


// function to select an action from gameActions array
function chooseLetter() {
 let randomNumber = Math.floor(Math.random()*3);

  return letters[randomNumber];
}

resetButton.addEventListener('click', () => {
	
	// Display the result
	document.getElementById('action').innerHTML = chooseLetter();
	document.getElementById('action1').innerHTML = chooseLetter();
	document.getElementById('action2').innerHTML = chooseLetter();
	document.getElementById('action3').innerHTML = chooseLetter();
	document.getElementById('action4').innerHTML = chooseLetter();
	document.getElementById('action5').innerHTML = chooseLetter();
	document.getElementById('action6').innerHTML = chooseLetter();
	document.getElementById('action7').innerHTML = chooseLetter();
	document.getElementById('action8').innerHTML = chooseLetter();
	document.getElementById('action9').innerHTML = chooseLetter();
	document.getElementById('action10').innerHTML = chooseLetter();
	document.getElementById('action11').innerHTML = chooseLetter();
	document.getElementById('action12').innerHTML = chooseLetter();
	document.getElementById('action13').innerHTML = chooseLetter();
	document.getElementById('action14').innerHTML = chooseLetter();
	document.getElementById('action15').innerHTML = chooseLetter();
	document.getElementById('action16').innerHTML = chooseLetter();
	document.getElementById('action17').innerHTML = chooseLetter();
	document.getElementById('action18').innerHTML = chooseLetter();
	document.getElementById('action19').innerHTML = chooseLetter();
	document.getElementById('action20').innerHTML = chooseLetter();
	document.getElementById('action21').innerHTML = chooseLetter();
	document.getElementById('action22').innerHTML = chooseLetter();
	document.getElementById('action23').innerHTML = chooseLetter();
	document.getElementById('action24').innerHTML = chooseLetter();
});