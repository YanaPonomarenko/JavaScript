const button = document.getElementById("toggleBtn");
const text = document.getElementById("text");

function toggleText() {
    if (text.style.display === "none") {
        text.style.display = "block";
        button.textContent = "Приховати";
    } else {
        text.style.display = "none";
        button.textContent = "Показати";
    }
}

button.addEventListener("click", toggleText);