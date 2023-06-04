"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true
};

const a = prompt('Один из последних посмотренных фильмов ?', ''),
  b = prompt('На сколько вы его оцените ?', ''),
  c = prompt('Один из последних посмотренных фильмов ?', ''),
  d = prompt('На сколько вы его оцените ?', '');
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);