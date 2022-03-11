/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};  

function start() {
    numberOfFilms = +prompt('Сколько фильмов уже смотрели?', '');
    while (!numberOfFilms){
        numberOfFilms = +prompt('Сколько фильмов уже смотрели?', '');
    }
    personalMovieDB.count = numberOfFilms;
}


function rememberMyFilms() {
    if (numberOfFilms && numberOfFilms > 0 && numberOfFilms < 10){
        alert('Просмотрено довольно мало фильмо');
       
    } else{
        if(numberOfFilms && numberOfFilms >= 10 && numberOfFilms < 30){
            alert('Вы классический зритель');
            
        } else{
            if (numberOfFilms && numberOfFilms >= 30){
                alert('Вы киноман');
            } else {
                alert('Произошла ошибка');
                console.log(numberOfFilms);
            }
    
        }
    } 
}

function detectPersonalLevel() {
    for (let i = 0; i < personalMovieDB.count; i++){
        
        let lastFilm = prompt('Один из последних фильмов?', '');
        let score = prompt('Оценка', '');
        if (!lastFilm || lastFilm.length > 50 || !score){
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = score;
    }
}

function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}
start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();






// const lastFilm = prompt('Один из последних фильмов?', '');
// const score = prompt('Оценка', '');
// const lastFilm1 = prompt('Один из последних фильмов?', '');
// const score1 = prompt('Оценка', '');

// personalMovieDB.movies.lastFilm = score;
// personalMovieDB.movies.lastFilm1 = score1;


