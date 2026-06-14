import Block from "./Block.js";

const images = [
  "🐶", "🐶",
  "🐱", "🐱",
  "🐭", "🐭",
  "🐹", "🐹",
  "🐰", "🐰",
  "🦊", "🦊",
  "🐻", "🐻",
  "🐼", "🐼",
  "🐨", "🐨",
  "🐯", "🐯"
];

let matchedPairs = 0;
const totalPairs = images.length / 2;
const field = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function showAllBlocks() {
  const mainBlock = document.getElementById("main-block");
  mainBlock.innerHTML = "";
  
  const rows = [7, 6, 7];
  const newArr = shuffle([...images]);
  let imgCounter = 0;
  
  for (let i = 0; i < 3; i++) {
    field[i] = [];
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < rows[i]; j++) {
      const value = newArr[imgCounter];
      imgCounter++;
      
      const block = new Block(value, document.createElement("div"));
      
      block.block.addEventListener("click", (e) => {
        flipCard(block);
      });
      
      field[i].push(block);
      row.appendChild(block.block);
    }
    mainBlock.appendChild(row);
  }
}

showAllBlocks();

let clickCount = 0;
let firstCard = null;
let secondCard = null;
let lock = false;

const topDiv = document.getElementById("top");
topDiv.style.display = "flex";
topDiv.style.justifyContent = "center";
topDiv.style.alignItems = "center";
topDiv.style.marginBottom = "25px";
topDiv.style.gap = "20px";

const timer = document.getElementById("timer");
timer.style.height = "50px";
timer.style.width = "200px";
timer.style.backgroundColor = "#ff8c42";
timer.style.borderRadius = "15px";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.fontSize = "18px";
timer.style.fontWeight = "bold";
timer.style.color = "white";
timer.innerText = `Час: 0 сек`;

const point = document.getElementById("point");
point.style.height = "50px";
point.style.width = "200px";
point.style.backgroundColor = "#ff8c42";
point.style.borderRadius = "15px";
point.style.display = "flex";
point.style.justifyContent = "center";
point.style.alignItems = "center";
point.style.fontSize = "18px";
point.style.fontWeight = "bold";
point.style.color = "white";
point.innerText = `Пар: 0 / ${totalPairs}`;

let seconds = 0;
const timerInterval = setInterval(() => {
  seconds++;
  timer.innerText = `Час: ${seconds} сек`;
}, 1000);

function flipCard(block) {
  if (lock) return;
  if (block === firstCard) return;
  if (block.matched) return;
  
  block.openCard();
  
  clickCount++;
  
  if (clickCount === 1) {
    firstCard = block;
  } else if (clickCount === 2) {
    secondCard = block;
    lock = true;
  }
  
  if (!secondCard) return;
  
  if (firstCard.image === secondCard.image) {
    setTimeout(() => {
      matchedPairs++;
      point.innerText = `Пар: ${matchedPairs} / ${totalPairs}`;
      
      firstCard.unvisibleBlock();
      secondCard.unvisibleBlock();
      
      firstCard = null;
      secondCard = null;
      clickCount = 0;
      lock = false;
      
      if (matchedPairs === totalPairs) {
        clearInterval(timerInterval);
        point.innerText = `ВИ ПЕРЕМОГЛИ! Час: ${seconds} сек!`;
        timer.innerText = `🏆 Фініш! 🏆`;
      }
    }, 400);
  } else {
    setTimeout(() => {
      firstCard.closeCard();
      secondCard.closeCard();
      
      firstCard = null;
      secondCard = null;
      clickCount = 0;
      lock = false;
    }, 700);
  }
}