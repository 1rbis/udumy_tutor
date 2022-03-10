

const numberOfFilms = prompt('Сколько фильмов уже смотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  

const lastFilm = prompt('Один из последних фильмов?', '');
const score = prompt('Оценка', '');

personalMovieDB.movies.lastFilm = score;

console.log(personalMovieDB);