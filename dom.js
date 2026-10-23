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

let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");
let itemList = document.getElementById("itemList");

addButton.addEventListener("click", function() {
    let item = document.createElement("li");
    item.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(item);
});

removeButton.addEventListener("click", function() {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
});
