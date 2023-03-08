let rateContainer = document.getElementById('rate');
let thankyouContainer = document.getElementById('thankyou');
let displayMessage = document.getElementById('message');
let button = document.getElementById('btn');
let rateButtons = document.querySelectorAll('span');

thankyouContainer.style.display = 'none';
let selected = "";

function removeSelectedClasses(){
    rateButtons.forEach(btn => {
        btn.classList.remove("selected");
    })
}

rateButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        removeSelectedClasses()
        selected = e.target.textContent;
        e.target.classList.add("selected");
    })
})


button.addEventListener('click', () => {
	displayMessage.textContent = `You selected ${selected} out of 5`;
	thankyouContainer.style.display = 'flex';
	rateContainer.style.display = 'none';
	
});