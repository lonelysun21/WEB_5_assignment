let textButton = document.getElementById("textButton");
let paragraph = document.getElementById("changeText");

textButton.addEventListener("click", function() {
    paragraph.textContent = "The text has been changed!";
});

let colorButton = document.getElementById("colorButton");
let fontButton = document.getElementById("fontButton");
let styleBox = document.getElementById("styleBox");
let styleText = document.getElementById("styleText");

colorButton.addEventListener("click", function() {
    styleBox.style.backgroundColor = "lightblue";
});

fontButton.addEventListener("click", function() {
    styleText.style.fontSize = "24px";
});
