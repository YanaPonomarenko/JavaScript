class Block {
  image;
  block;
  matched = false;
  static id = 0;
  static color = "#ff8c42";
  static size = 80;

  constructor(image, block) {
    Block.id++;
    this.image = image;
    this.matched = false;
    const mainBlock = document.getElementById("main-block");
    this.block = block;
    block.classList.add("cell");
    block.style.width = Block.size + "px";
    block.style.height = Block.size + "px";
    block.style.backgroundColor = Block.color;
    block.style.borderRadius = "12px";
    block.style.border = "2px solid white";
    block.style.display = "flex";
    block.style.justifyContent = "center";
    block.style.alignItems = "center";
    block.style.fontSize = "40px";
    block.style.fontWeight = "bold";
    block.style.cursor = "pointer";
    block.innerText = "?";
    mainBlock.appendChild(block);
    block.id = Block.id;
  }

  openCard() {
    this.block.innerText = this.image;
    this.block.style.backgroundColor = "#f4a460";
  }

  closeCard() {
    this.block.innerText = "?";
    this.block.style.backgroundColor = Block.color;
  }

  unvisibleBlock() {
    this.block.style.visibility = "hidden";
    this.matched = true;
  }
}

export default Block;