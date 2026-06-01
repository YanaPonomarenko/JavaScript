class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }
    
    print(text) {
        const outputDiv = document.getElementById('output');
        const style = `font-size: ${this.fontSize}px; color: ${this.fontColor}; font-family: ${this.fontFamily};`;
        outputDiv.innerHTML += `<span style="${style}">${text}</span><br>`;
    }
}
const printer = new PrintMachine(20, 'red', 'Times New Roman');
printer.print('Hello World');