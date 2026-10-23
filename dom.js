let textButton = document.getElementById("textButton");
let paragraph = document.getElementById("changeText");

textButton.addEventListener("click", function() {
    paragraph.textContent = "The text has been changed!";
});
