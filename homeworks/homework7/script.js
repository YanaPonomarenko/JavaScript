const button = document.getElementById("toggleBtn");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    if (text.style.display === "none") {
        text.style.display = "block";
        button.textContent = "Приховати";
    } else {
        text.style.display = "none";
        button.textContent = "Показати";
    }
});