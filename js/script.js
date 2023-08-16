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

console.log(getCoupeNumber(0));