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

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degree Celsius:")),
//   };

//   // console.log(measurement.value);
//   //   console.log(measurement);
//   console.table(measurement);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// ! Bug

// const calcTempAmplitudeBug = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   let min = temps[0];
//   let max = temps[0];
//   for (let i = 0; i <= temps.length - 1; i++) {
//     // debugger;
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] < min) min = temps[i];

//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max, min);
//   const tempAmplitudeBug = max - min;
//   return console.log(tempAmplitudeBug);
// };

// calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

//! Coding Challenge #1

// ! 1) Understanding  the problems
// What is forecasted? :to calculate or predict usually as a result of study and analysis of available pertinent data

//!Breaking up into sub-problems

// create a function printForecast
// have to pass arr as argument
// have to use a loop in array
// return each items with it's days

// const printForecast = function (arr) {
//   let string = "";

//   for (let i = 0; i <= arr.length - 1; i++) {
//     string += `${arr[i]}C in ${i + 1}...`;
//   }
//   console.log("... " + string);
// };

// printForecast([17, 21, 23]);
// printForecast([12, 5, -5, 0, 4]);
