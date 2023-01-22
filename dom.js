// DOM Manipulation


// Event Listeners

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-two');
console.log(buttonTwo);

function alertBtn() {
    alert('I see you again hmm!');
}

buttonTwo.addEventListener('click', alertBtn);

// Mouseover

const newBackgroundColor = document.querySelector('.container');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'lightblue';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);