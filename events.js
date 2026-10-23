let mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function() {
    mouseBox.style.backgroundColor = "lightgreen";
});

mouseBox.addEventListener("mouseout", function() {
    mouseBox.style.backgroundColor = "lightblue";
});

let keyboardInput = document.getElementById("keyboardInput");
let keyboardOutput = document.getElementById("keyboardOutput");

keyboardInput.addEventListener("keyup", function() {
    keyboardOutput.textContent = keyboardInput.value;
});

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

function calculate(operation) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Enter both numbers";
        return;
    }

    let a = Number(num1.value);
    let b = Number(num2.value);
    let answer;

    if (operation === "+") {
        answer = a + b;
    } else if (operation === "-") {
        answer = a - b;
    } else if (operation === "*") {
        answer = a * b;
    } else if (operation === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero";
            return;
        }
        answer = a / b;
    }

    result.textContent = "Result: " + answer;
}

document.getElementById("add").addEventListener("click", function() {
    calculate("+");
});

document.getElementById("subtract").addEventListener("click", function() {
    calculate("-");
});

document.getElementById("multiply").addEventListener("click", function() {
    calculate("*");
});

document.getElementById("divide").addEventListener("click", function() {
    calculate("/");
});
