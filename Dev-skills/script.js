// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempBugp = function (temp) {
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   let ampli = max - min;
//   console.log(max, min, ampli);
// };
// calcTempBugp(temperatures);
// const calcTempBug = function (temp1, temp2) {
//   const temp = temp1.concat(temp2);
//   console.log(temp);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   let ampli = max - min;
//   console.log(max, min, ampli);
// };
// calcTempBug([1, 2, 3, 4 - 3, 9], [99, 3, -1]);

// const calc = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: 10,
//     // value: parseInt(prompt('Degree celcius')),
//   };
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(calc());

//using debugger.
// const calcTempBug = function (temp1, temp2) {
//   const temp = temp1.concat(temp2);
//   console.log(temp);
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temp.length; i++) {
//     const curTemp = temp[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) {
//       max = curTemp;
//     }
//     if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   let ampli = max - min;
//   console.log(max, min, ampli);
// };
// calcTempBug([3, 5, 1], [9, 4, 5]);

//a problem to solve.
// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}°C in ${i + 1} days .... `;
//   }
//   console.log('...' + str);
// };
// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);

//.......................PRACTICE................
// let num = 455231;
// console.log(
//   num
//     .toString()
//     .split('')
//     .sort((a, b) => b - a)
//     .join('')
// );

// let a = 1234;

// console.log(typeof a);
// console.log(a.toString());
// console.log(typeof a.toString());
// console.log(typeof a);

// let n = 1230; 
// console.log(n.toString().split('').sort().reverse().join(''));

// let func = arr => arr.filter(element => typeof element === 'number');
// let output = func([1, 2, 3, 'a', 'b', 4, 5]);
// console.log(output);

// let str = 'UTTT';
// let ouput = str.split('T').join('U');
// console.log(ouput);

// let a = "KANEKI";
// console.log(a.split("K"));

// let b = "iamahuman";
// console.log(b.split(""));

// let str = 'UTTT';
// let ouput = str.replaceAll('T','U');
// console.log(ouput);

// let arr = [-2];
// console.log(Math.max(...arr), Math.min(...arr));

// let str = 'let enjoy the party together';
// let arr = str.split(' ');
// let x = Math.min(...arr.map(element => element.length));
// console.log(x);
