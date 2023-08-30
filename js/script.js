// function getMathResult(a, b) {

//   let result = '';
//   let sum = 0;

//   if (!isNaN(b) && b <= 0 || typeof(b) === 'string') return a;

//   for (let i = 0; i < b; i++) {
//     sum += a;
//     result += sum;
//     if(i === b - 1) continue;

//     for (let j = 0; j < 1; j++) {      
//       result += '---';       
//     }    
//   } 
//   return result;

// }

// const result = getMathResult(5, 3);

// const anyString = 'Mozilla';

// console.log(anyString.slice(3, 1));
// console.log(anyString.substring(8, 0));

function calculateVolumeAndAre(a) {
  if(isNaN(a) || !Number.isInteger(a) || a < 0) return console.log('При вычислении произошла ошибка');
  let v = a * a * a;
  let s = 6 * a * a;
  return console.log(`Объем куба: ${v}, площадь всей поверхности: ${s}`);
}

// calculateVolumeAndAre(-15);
  

function getCoupeNumber(a) {
 
  if(isNaN(a) || !Number.isInteger(a) || a < 0) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  } else if (a === 0 || a >= 36) {
    return'Таких мест в вагоне не существует';
  } else {
    return Math.ceil(a / 4);
  }
}

// console.log(getCoupeNumber(0));


function getTimeFromMinutes(min) {
  let h = Math.floor(min / 60),
      m = min - h * 60; 
  if(isNaN(min) || !Number.isInteger(min) || min < 0 || min > 600 ) {
    return 'Ошибка, проверьте данные';
  } else if (h >= 2) {    
    return `Это ${h} часа и ${m} минут`;
  } else if (h < 1) {
    return `Это ${h} часов и ${m} минут`;
  } else {
    return `Это ${h} час и ${m} минут`;
  }
 
}

// console.log(getTimeFromMinutes(50));


function findMaxNumber(...arg) {

  let result;

  for(let i = 0; i < arg.length; i++) {
    if (typeof(arg[i]) !== 'number' || arg.length < 4 )
    result = 0;
  }

  if(result == 0) {
    return result;
  } else {
    return Math.max.apply(null,arg);
  }
}


// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(1, 5, '6', '10'));


function fib(num) {
  let res = '';
  let a = 0;
  let b = 1;
  if (num === 0 || typeof(num) !== 'number' || !Number.isInteger(num) ) return res;

  for (let i = 1; i <= num; i++) {
    let c = a + b;
    if (i < 2) {
      res += a;
    } else if (i == 3) {
      res += ' ' + b;
    } else {
      a = b;
      b = c;
      res += ' ' + c;
    }   
   
  }
  return res;
}

// console.log(fib(4));
// console.log(fib(7));
// console.log(fib('7'));
// console.log(fib(1));
// console.log(fib(0));


//  lesson # 31 --  callback functions

function learnJs (str, callback) {
  console.log(`I learn ${str}`);
  callback();
}

function done () {
  console.log('This is my callback function');
}

learnJs('JavaScript', done);

