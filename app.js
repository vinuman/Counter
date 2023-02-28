const decreaseButton = document.querySelector('.decrease');
const increaseButton = document.querySelector('.increase');
const resetButton = document.querySelector('.reset');
let displayValue = document.getElementById('value');
console.log(displayValue);

decreaseButton.addEventListener('click', decreaseByOne);
increaseButton.addEventListener('click', increaseByOne);
resetButton.addEventListener('click', resetToZero);

function decreaseByOne(){
     
    displayValue.innerHTML--;
    colorChange();

}

function increaseByOne(){
    displayValue.innerHTML++;
    colorChange();
}

function resetToZero(){
    displayValue.innerHTML = 0;
    colorChange();
}


function colorChange(){
    if(displayValue.innerHTML <0){
        displayValue.classList.add('red');
        displayValue.classList.remove('green');
    } else if(displayValue.innerHTML > 0){
        displayValue.classList.add('green');
        displayValue.classList.remove('red');
    } else if(displayValue.innerHTML == 0){
        displayValue.classList.remove('green');
        displayValue.classList.remove('red');
    }
}

