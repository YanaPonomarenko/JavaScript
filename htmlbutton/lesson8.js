const cl = console.log;
const colors = ["yellow", "blue", "orange", "black", "green", "gray", "red", "purple", "pink", "brown"];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    cl("Випадковий індекс: " + randomIndex + ", колір: " + colors[randomIndex]);
    return colors[randomIndex];
}

function createBlock() {
    const block = document.createElement("div");
    block.className = "block";
    block.style.backgroundColor = getRandomColor();
    
    block.onclick = function() {
        this.remove();
        cl("Блок видалено");
    };
    
    cl("Блок створено");
    return block;
}

const addButton = document.getElementById("addBlockBtn");
const container = document.getElementById("container");

addButton.onclick = function() {
    const newBlock = createBlock();
    container.appendChild(newBlock);
    cl("Блок додано в контейнер");
};