"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors:{},
	genres: [],
	privat: false
};
const lastLookedFilm1 = prompt("Один из последних посмотренных фильмов?", ""),
		grade1 = +prompt("На сколько цоените его?",""),
		lastLookedFilm2 = prompt("Один из последних посмотренных фильмов?",""),
		grade2 = +prompt("На сколько цоените его?","");
personalMovieDB.movies[lastLookedFilm1] = grade1;
personalMovieDB.movies[lastLookedFilm2] = grade2;

console.log(personalMovieDB);