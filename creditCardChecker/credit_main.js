// Getting the card number from the input

let cardNumber = document.getElementById('card_number');
let checkCardButton = document.getElementById('check_card');
let resultButton = document.getElementById('result');



// function to convert string of credit card numbers to an array with the numbers
function stringToArr(value) {
  const newArr = [];
  for (let i = 0; i < value.length; i++) {
    newArr.push(Number(value[i]));    
  }
    return newArr;
}

// Function to validate the Credit Card Number

function validateCred(arr) {
  let sum = 0;
  for (let i = arr.length-1; i >= 0; i--) {
    let value = arr[i];
    //console.log(value)
    if ((arr.length - 1 - i) % 2 === 1) {
      value *= 2;
      //console.log(value)
    }
    if (value > 9) {
      value -= 9;
    }
    sum += value;
  }
  //console.log(sum)
  return sum % 10 === 0;
}

checkCardButton.addEventListener('click', () => {
  //obtain credit card value from text
    const currentCardNumber = cardNumber.value;

  // convert value to an array of number
    const cardArray = stringToArr(currentCardNumber);
  
  //check the length of the input number
  /*
  if (currentCardNumber.length < 14 || currentCardNumber > 16) {
    window.alert("Please make sure to enter 14 to 16 digits");
  }
  */

  // validate credit card
    const validationResult = validateCred(cardArray);  
    const isValid = validationResult ? 'true' : 'false'

  // Display the result
    if (validationResult) {
    checkCardButton.innerText = 'Valid Credit Card';
    checkCardButton.style.backgroundColor = 'green';
    } else {
    checkCardButton.innerText = 'Invalid Credit Card';
    checkCardButton.style.backgroundColor = 'red';
    };    
});

// function to reset a new check
let newCheck = document.getElementById('new_check');
new_check.hidden = true;

checkCardButton.onclick = function() {
  new_check.hidden = false;
}

new_check.onclick = function() {
  document.location.reload();
}











