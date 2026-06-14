function setCookie(n, v) {
  document.cookie = n + "=" + v + "; path=/; max-age=31536000";
}

function getCookie(n) {
  let m = document.cookie.match(new RegExp("(^| )" + n + "=([^;]+)"));
  return m ? m[2] : null;
}

function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
}

const themeSelect = document.getElementById("themeSelect");

let savedTheme = getCookie("theme") || "dark";

themeSelect.value = savedTheme;
applyTheme(savedTheme);

themeSelect.onchange = () => {
  setCookie("theme", themeSelect.value);
  applyTheme(themeSelect.value);
};