function setCookie(name, value, minutes) {
    let d = new Date();
    d.setTime(d.getTime() + minutes * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString();
}

function getCookie(name) {
    let ca = decodeURIComponent(document.cookie).split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name + "=") == 0) return c.substring(name.length + 1, c.length);
    }
    return "";
}

function register() {
    let login = document.getElementById("login").value;
    let pass = document.getElementById("password").value;
    if (login && pass) {
        setCookie("username", login, 30);
        check();
    } else alert("fiil in all fields");
}

function logout() {
    document.cookie = "username=; max-age=-1";
    check();
}

function check() {
    let user = getCookie("username");
    let welcome = document.getElementById("welcome");
    let form = document.getElementById("form");
    let logout = document.getElementById("logout");
    
    if (user) {
        welcome.innerText = `Welcome ${user}!`;
        form.classList.add("hidden");
        logout.classList.remove("hidden");
    } else {
        welcome.innerText = "Welcome";
        form.classList.remove("hidden");
        logout.classList.add("hidden");
    }
}

check();
