const diceBtn = document.getElementById('button-dice');
let diceResult = document.querySelector('.dice-result > p')

function throwDice() {
  diceResult.innerHTML = generateRandomNumber();
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 6 + 1)
}

diceBtn.addEventListener('click',throwDice)