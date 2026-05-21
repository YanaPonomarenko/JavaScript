const cl = console.log;
const colors = ["yellow", "blue", "orange", "black", "green", "gray", "red"];
let intervalId = null;

function changeColor(block) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    block.style.backgroundColor = colors[randomIndex];
}

const block = document.querySelector("div");
block.style.width = "300px";
block.style.height = "300px";
block.style.backgroundColor = "#ccc";

block.onclick = function() {
    if (!intervalId) {
        changeColor(this);
        intervalId = setInterval(function() {
            changeColor(block);
        }, 1000);
    }
};