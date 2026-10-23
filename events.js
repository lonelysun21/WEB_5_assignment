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
