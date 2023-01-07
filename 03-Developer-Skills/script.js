// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperature = [2, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// ! 1) Understanding  the problems
// what is temp amplitude?: the difference between the minimum and maximum temperature
// How do we calculate hight and lowest value in array?
// What is a sensor error and what to do?

// ! 2) Breaking up into sub-problems
// how to ignore error
// find the lowest value from a array
// find the hight value from a array
// Subtract min and max and return it

// const calcTempAmplitude = function (temps) {
//   let min = temps[0];
//   let max = temps[0];
//   for (let i = 0; i <= temps.length - 1; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] < min) min = temps[i];

//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max, min);
//   const tempAmplitude = max - min;
//   return console.log(tempAmplitude);
// };

// calcTempAmplitude(temperature);

//! Function should now receive 2 arrays of temps

// ! 1) Understanding  the problems
// with 2 array ? should we implement functionality twice?No: Marge 2 arrays

//!Breaking up into sub-problems
// How to merge 2 arrays

// const calcTempAmplitude = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   let min = temps[0];
//   let max = temps[0];
//   for (let i = 0; i <= temps.length - 1; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] < min) min = temps[i];

//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max, min);
//   const tempAmplitude = max - min;
//   return console.log(tempAmplitude);
// };

// calcTempAmplitude([1, 2, 3, -9], temperature);
