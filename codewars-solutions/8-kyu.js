"use strict"
// tasks 1 
// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}


// tasks 2
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }


// tasks 3
// https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
function greet(name){
  return `Hello, ${name} how are you doing today?`
}


// tasks 4
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
function abbrevName(name){
  const nameArr = name.split(' ');
  return `${nameArr[0][0].toUpperCase()}.${nameArr[1][0].toUpperCase()}`
}


// tasks 5
// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  return arr.filter(el => el > 0).reduce((acc, el) => acc + el, 0)
}


// tasks 6
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}


// tasks 7
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    let positive = 0;
    let negative = 0;
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
        positive++;
    } else if (input[i] < 0) {
        negative += input[i];
    }
  }

  return [positive, negative];
}


// tasks 8
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
function arrayPlusArray(arr1, arr2) {
  let arrSum1 = arr1.reduce((acc, el) => acc + el, 0);
  let arrSum2 = arr2.reduce((acc, el) => acc + el, 0);
  
  return arrSum1 + arrSum2;
}









