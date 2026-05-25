//DOM - Document Object Model
//BOM - Browser Object Model

const div = document.createElement("div");

const p1 = document.createElement("p");
p1.innerText = "C++";
const p2 = document.createElement("p");
p2.innerText = "C#";
const p3 = document.createElement("p");
p3.innerText = "JS";

div.append(p1, p2, p3);

document.body.append(div);

const button = document.createElement("button");
button.innerText = "Show";
document.body.append(button);

button.onclick = function() {
    let language = prompt("введіть назву мови програмування:");
    if (language) {
        const newP = document.createElement("p");
        newP.innerText = language;
        div.append(newP);
    }
};