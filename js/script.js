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

const anyString = 'Mozilla';

console.log(anyString.slice(3, 1));
console.log(anyString.substring(8, 0));