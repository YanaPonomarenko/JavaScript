const result = document.getElementById("result");

const countries = ["Україна", "США", "Велика Британія", "Німеччина", "Франція", "Італія", "Іспанія", "Польща", "Японія"];
const countrySelect = document.getElementById("countrySelect");

countries.forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    countrySelect.appendChild(option);
});

const cities = {
    "Україна": ["Київ", "Львів", "Одеса", "Харків", "Дніпро"],
    "США": ["Нью-Йорк", "Лос-Анджелес", "Чикаго"],
    "Велика Британія": ["Лондон", "Манчестер", "Бірмінгем"],
    "Німеччина": ["Берлін", "Мюнхен", "Гамбург"],
    "Франція": ["Париж", "Марсель", "Ліон"],
    "Італія": ["Рим", "Мілан", "Неаполь"],
    "Іспанія": ["Мадрид", "Барселона", "Валенсія"],
    "Польща": ["Варшава", "Краків", "Вроцлав"],
    "Японія": ["Токіо", "Осака", "Нагоя"]
};

countrySelect.addEventListener("change", function() {
    const citySelect = document.getElementById("citySelect");
    citySelect.innerHTML = '<option value="">— Місто —</option>';
    
    const selectedCountry = this.value;
    if (selectedCountry && cities[selectedCountry]) {
        cities[selectedCountry].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

document.getElementById("citySelect").addEventListener("change", function() {
    if (this.value) document.getElementById("cityInput").value = "";
});

document.getElementById("cityInput").addEventListener("input", function() {
    if (this.value) document.getElementById("citySelect").value = "";
});

async function getCoordinates(city) {
    const API_KEY = "e47a86d4ebd6d15eacf5a61c1df7c32b";
    const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

async function getWeatherCoord(lat, lon) {
    const API_KEY = "e47a86d4ebd6d15eacf5a61c1df7c32b";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ua&appid=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

function getIcon(desc) {
    const d = desc.toLowerCase();
    if (d.includes("сон") || d.includes("ясно")) return "☀️";
    if (d.includes("дощ") || d.includes("гроза")) return "🌧️";
    if (d.includes("хмар")) return "☁️";
    if (d.includes("сніг")) return "❄️";
    return "🌤️";
}

async function getWeather() {
    const citySelect = document.getElementById("citySelect");
    const cityInput = document.getElementById("cityInput");
    
    let city = cityInput.value.trim();
    if (!city && citySelect.value) {
        city = citySelect.value;
    }

    if (!city) {
        result.innerHTML = "Введіть або оберіть місто";
        return;
    }

    try {
        const geoData = await getCoordinates(city);
        if (geoData.length === 0) {
            result.innerHTML = "Місто не знайдено";
            return;
        }

        const lat = geoData[0].lat;
        const lon = geoData[0].lon;
        const weather = await getWeatherCoord(lat, lon);
        
        const temp = Math.round(weather.main.temp);
        const desc = weather.weather[0].description;
        const icon = getIcon(desc);

        result.innerHTML = `
            <div class="icon">${icon}</div>
            <div class="temp">${temp}°C</div>
            <div>${desc}</div>
            <div style="font-size:14px;color:#888;margin-top:10px;">
                💧 ${weather.main.humidity}% | 💨 ${Math.round(weather.wind.speed * 3.6)} км/год
            </div>
        `;

    } catch (err) {
        result.innerHTML = "Помилка: " + err.message;
    }
}

document.getElementById("cityInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") getWeather();
});