const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a6d59a26b14b3e6f6faa67b19b86b9c9&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=a6d59a26b14b3e6f6faa67b19b86b9c9&query=';

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function (data) {
            main.innerHTML = ''; 
            data.results.forEach(element => {
                const div_card = document.createElement('div');
                div_card.setAttribute('class', 'card');

                const image = document.createElement('img');
                image.setAttribute('class', 'thumbnail');
                image.src = IMG_PATH + element.poster_path;

                const title = document.createElement('h3');
                title.innerHTML = element.title;

                div_card.appendChild(image);
                div_card.appendChild(title);

                main.appendChild(div_card);
            });
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchItem = search.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        search.value = "";
    }
});
