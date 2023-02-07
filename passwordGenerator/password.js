let passwordLength = document.getElementById('input_pass_length');
let generatePasswordButton = document.getElementById('button');
let outputPassword = document.getElementById('output_password');
let copyButton = document.getElementById('clipboard');

const character =  ["A", "B", "C" , "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ">", ".", "?", "/"];
  

// function to generate a ramdon character
function pickValue() {
  return character[Math.floor(Math.random() * 63)];  
}

// function to generate password
function passwordGenerator(num) { 
  let passwordLength = num;
  const password = [ ];
  for (let step = 0; step < passwordLength; step++) {
    password.push(pickValue());
  }
  return password.join("");
}


// event password generator
generatePasswordButton.addEventListener('click', () => {
 //obtain password length from text
 const currentPasswordLength = passwordLength.value;

 //call out passwordGenerator function to get the password
 const passwordResult = passwordGenerator(currentPasswordLength)

 // Display the result
outputPassword.innerText = passwordResult;
outputPassword.style.color = '#FFF';
})

// function to copy password to clipboard
function handleClick() {
       
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(outputPassword.innerText);
     
    alert("Copied Text: " + outputPassword.innerText);
}

//Event listener when copy button is clicked
copyButton.addEventListener('click', () => {
	handleClick();
});

// function to reset for new password
let newPassword = document.getElementById('new_password');
new_password.hidden = true;

generatePasswordButton.onclick = function() {
  new_password.hidden = false;
}

new_password.onclick = function() {
  document.location.reload();
}