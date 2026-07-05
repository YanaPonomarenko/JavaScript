const apiKey = "e69e22a9";
let currentTitle = "", currentType = "", currentPage = 1;

document.getElementById("titleInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchMovies();
});

function searchMovies() {
    const title = document.getElementById("titleInput").value.trim();
    const type = document.getElementById("typeSelect").value;
    
    if (!title) {
        document.getElementById("results").innerHTML = "<p style='color:red;'>Введіть назву фільму</p>";
        return;
    }
    
    currentTitle = title;
    currentType = type;
    currentPage = 1;
    fetchMovies(title, type, 1);
}

function fetchMovies(title, type, page) {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(title)}&type=${type}&page=${page}`;
    
    document.getElementById("results").innerHTML = '<div class="loading">Завантаження...</div>';
    document.getElementById("pagination").innerHTML = "";
    document.getElementById("details").innerHTML = "";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovies(data.Search);
                createPagination(title, type, Math.ceil(data.totalResults / 10), page);
            } else {
                document.getElementById("results").innerHTML = '<div class="not-found">Movie not found</div>';
            }
        })
        .catch(error => {
            document.getElementById("results").innerHTML = `<div class="not-found">Помилка: ${error.message}</div>`;
        });
}

function displayMovies(movies) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    
    movies.forEach(movie => {
        const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/80x120/cccccc/666666?text=No+Image";
        
        resultsDiv.innerHTML += `
            <div class="movie">
                <img src="${poster}" alt="${movie.Title}">
                <div style="flex:1;">
                    <b>${movie.Title}</b> (${movie.Year})
                    <br>Тип: ${movie.Type}
                    <br><br>
                    <button onclick="fetchDetails('${movie.imdbID}')">Деталі</button>
                </div>
            </div>
        `;
    });
}

function createPagination(title, type, totalPages, currentPage) {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = "";
    
    if (totalPages <= 1) return;
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.className = "active";
        btn.addEventListener("click", () => fetchMovies(title, type, i));
        paginationDiv.appendChild(btn);
    }
}

function fetchDetails(imdbID) {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}&plot=full`;
    
    document.getElementById("details").innerHTML = '<div class="loading">Завантаження...</div>';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayDetails(data);
            } else {
                document.getElementById("details").innerHTML = "<p style='color:red;'>Деталі не знайдено</p>";
            }
        })
        .catch(error => {
            document.getElementById("details").innerHTML = `<p style='color:red;'>Помилка: ${error.message}</p>`;
        });
}

function displayDetails(movie) {
    const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300/cccccc/666666?text=No+Image";
    
    document.getElementById("details").innerHTML = `
        <h2>${movie.Title}</h2>
        <div class="detail-row">
            <div style="flex:1;">
                <p><b>Рік:</b> ${movie.Year}</p>
                <p><b>Тип:</b> ${movie.Type}</p>
                <p><b>Режисер:</b> ${movie.Director || "Немає"}</p>
                <p><b>Актори:</b> ${movie.Actors || "Немає"}</p>
                <p><b>Жанр:</b> ${movie.Genre || "Немає"}</p>
                <p><b>Тривалість:</b> ${movie.Runtime || "Немає"}</p>
                <p><b>Рейтинг:</b> ${movie.imdbRating || "Немає"}</p>
                <p><b>Сюжет:</b><br>${movie.Plot || "Немає"}</p>
            </div>
            <img src="${poster}" alt="${movie.Title}">
        </div>
    `;
}