export default function filterFilmsByDirector(films, director){
    return films.filter(film => film.director === director);

}

export default function getListOf(film, key){
    return film.map(film => film[key]);
}