
// const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {  },
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 120;

// switch(num) {
//   case 49: 
//     console.log('Error');
//     break;
//   case 100:
//     console.log('Error!');
//     break;
//   case 50:
//     console.log('Ok!');
//     break;
//   default:
//     console.log('Not this time!');
//     break;
// }

// const humburger = 3;
// const fries = 0;

// if ((humburger === 3 || humburger > 3) && fries) {
//   console.log('We not hungry');
// } else {
//   console.log('We not stay here!');
// }


// console.log(0 || 1);
// console.log(1 && 0);


// for (let i = 1; i < 10; i++)  {
  
//   if (i === 10) {
//     break;
//   }

//   console.log(i);
// }

// let result = '';
// const lengh = 12;
// let b = 5;

// for (let i = 1; i < lengh; i++) {
//     for(let j = lengh; j > i; j--) {
      
//       if(i % 2 === 0) continue;
//       result += ' ';      
//     }
//   result += '\n';
// }

// console.log(result);


// for (let i = 2; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

// let i = 2;

// while (i <= 16) {
//     i++;
//     if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }

// const arrayOfNumbers = [];

//     for(let i = 5; i <=10; i++) {
//         arrayOfNumbers.push(i);
//     }
// console.log(arrayOfNumbers);

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result);
