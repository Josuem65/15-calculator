function add() {
  let number1 = document.getElementById("num_one").value
  let number2 = document.getElementById("num_two").value
  const answer = number1 * 1 + number2 * 1
  document.getElementById("answer").innerHTML = answer
}
document.getElementById("add").addEventListener("click", add)
// S U B T R A C T
function subtract() {
  let number1 = document.getElementById("num_one").value
  let number2 = document.getElementById("num_two").value
  const answer = number1 * 1 - number2 * 1
  document.getElementById("answer").innerHTML = answer
}
document.getElementById("subtract").addEventListener("click", subtract)
// M U L T I P L Y
function multiply() {
  let number1 = document.getElementById("num_one").value
  let number2 = document.getElementById("num_two").value
  const answer = number1 * 1 * (number2 * 1)
  document.getElementById("answer").innerHTML = answer
}
document.getElementById("multiply").addEventListener("click", multiply)
// D I V I D E
function divide() {
  let number1 = document.getElementById("num_one").value
  let number2 = document.getElementById("num_two").value
  const answer = (number1 * 1) / (number2 * 1)
  document.getElementById("answer").innerHTML = answer
}
document.getElementById("divide").addEventListener("click", divide)
