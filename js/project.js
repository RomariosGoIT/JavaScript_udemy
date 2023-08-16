let numberOfFilms;



function start () {
  numberOfFilms = +prompt('How many films have you already watched?', '');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){  
    numberOfFilms = +prompt('How many films have you already watched?', '');
    
  }
  
}

// start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilm () {
  console.log('2');
  for(let i = 0; i < 0; i++) {
    const a = prompt('One of the last movies I watched', ''),
          b = +prompt('How would you rate the movie?', '');

          if(a !== null && b !== null && a !== '', b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
          } else {
            console.log('error');
            i--;
          }

  }

}

// rememberMyFilm();

function detectPersonalLevel () {
  if(personalMovieDB.count < 10) {
    console.log('Few movies watched!');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log('You are a classic spectator');
  } else if (personalMovieDB.count >=30) {
    console.log('Are you a cinephile');
  } else {
    console.log('ERROR');
  }
}

// detectPersonalLevel();

function showMyDB (hidden) {
  console.log(hidden);
  if(!hidden) {
    console.log(personalMovieDB); 
  }
}

// showMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
      const genres = prompt(`Ваш любимый жанр под номером ${i}`, '');
      personalMovieDB.genres[i - 1] = genres;
    }
}

// writeYourGenres();







