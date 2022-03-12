/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов уже смотрели?', '');
        while (personalMovieDB.count == ''){
            personalMovieDB.count = +prompt('Сколько фильмов уже смотрели?', '');
        }
    },
    rememberMyFilms: function () {
        if (personalMovieDB.count && personalMovieDB.count > 0 && personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмо');
           
        } else{
            if(personalMovieDB.count && personalMovieDB.count >= 10 && personalMovieDB.count < 30){
                alert('Вы классический зритель');
                
            } else{
                if (personalMovieDB.count && personalMovieDB.count >= 30){
                    alert('Вы киноман');
                } else {
                    alert('Произошла ошибка');
                    console.log(personalMovieDB.count);
                }
        
            }
        } 
    },
    detectPersonalLevel: function() {
        for (let i = 0; i < personalMovieDB.count; i++){
            
            let lastFilm = prompt('Один из последних фильмов?', '');
            let score = prompt('Оценка', '');
            if (!lastFilm || lastFilm.length > 50 || !score){
                i--;
                continue;
            }
            personalMovieDB.movies[lastFilm] = score;
        }
    },
    showMyDB: function (){
        if (!personalMovieDB.privat){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function (){
        for (let i = 1; i <= 3; i++){
            let genre =  prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == '' || genre == null){
                console.log('Вы ввели некоретные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre; 
            }    
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        });
    }
    

};  
// personalMovieDB.toggleVisibleMyDB();
personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

// function start() {
//     personalMovieDB.count = +prompt('Сколько фильмов уже смотрели?', '');
//     while (!personalMovieDB.count){
//         personalMovieDB.count = +prompt('Сколько фильмов уже смотрели?', '');
//     }
//     personalMovieDB.count = personalMovieDB.count;

// }


// function rememberMyFilms() {
//     if (personalMovieDB.count && personalMovieDB.count > 0 && personalMovieDB.count < 10){
//         alert('Просмотрено довольно мало фильмо');
       
//     } else{
//         if(personalMovieDB.count && personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//             alert('Вы классический зритель');
            
//         } else{
//             if (personalMovieDB.count && personalMovieDB.count >= 30){
//                 alert('Вы киноман');
//             } else {
//                 alert('Произошла ошибка');
//                 console.log(personalMovieDB.count);
//             }
    
//         }
//     } 
// }

// function detectPersonalLevel() {
//     for (let i = 0; i < personalMovieDB.count; i++){
        
//         let lastFilm = prompt('Один из последних фильмов?', '');
//         let score = prompt('Оценка', '');
//         if (!lastFilm || lastFilm.length > 50 || !score){
//             i--;
//             continue;
//         }
//         personalMovieDB.movies[lastFilm] = score;
//     }
// }

// function showMyDB(){
//     if (!personalMovieDB.privat){
//         console.log(personalMovieDB);
//     }
// }

// function writeYourGenres(){
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
//     }
// }
// start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();







// const lastFilm = prompt('Один из последних фильмов?', '');
// const score = prompt('Оценка', '');
// const lastFilm1 = prompt('Один из последних фильмов?', '');
// const score1 = prompt('Оценка', '');

// personalMovieDB.movies.lastFilm = score;
// personalMovieDB.movies.lastFilm1 = score1;
