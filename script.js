function addNumbers() {
    var firstNumber = parseFloat(document.getElementById('first_number').value);
    var secondNumber = parseFloat(document.getElementById('second_number').value);
    document.getElementById('res').innerHTML = isNaN(firstNumber) || isNaN(secondNumber) ? "Invalid input" : firstNumber + secondNumber;
}

function subtractNumbers() {
    var firstNumber = parseFloat(document.getElementById('first_number').value);
    var secondNumber = parseFloat(document.getElementById('second_number').value);
    document.getElementById('res').innerHTML = isNaN(firstNumber) || isNaN(secondNumber) ? "Invalid input" : firstNumber - secondNumber;
}

function multiplyNumbers() {
    var firstNumber = parseFloat(document.getElementById('first_number').value);
    var secondNumber = parseFloat(document.getElementById('second_number').value);
    document.getElementById('res').innerHTML = isNaN(firstNumber) || isNaN(secondNumber) ? "Invalid input" : firstNumber * secondNumber;
}

function divideNumbers() {
    var firstNumber = parseFloat(document.getElementById('first_number').value);
    var secondNumber = parseFloat(document.getElementById('second_number').value);
    document.getElementById('res').innerHTML = isNaN(firstNumber) || isNaN(secondNumber) ? "Invalid input" : firstNumber / secondNumber;
}

function clearInput() {
    document.getElementById('first_number').value = "";
    document.getElementById('second_number').value = "";
    document.getElementById('res').innerHTML = "Show Result";
}
