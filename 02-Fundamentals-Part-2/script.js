// ! Strict Mode
"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";

// ! Function

// function logger() {
//   console.log("My name is Shahadat Hossain");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return console.log(juice);
// }

// fruitProcessor(5, 8);

// ! Function Declarations vs. Expressions

// function clcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// console.log(clcAge1(2001));

// const clcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// console.log(clcAge2(2002));

// function hi(bye) {}

// const bye = function (hi) {
//   return (hi = "hi");
// };

// console.log(`${bye()}`);

// ! Arrow Function

// const clcAge3 = (birthYear) => 2023 - birthYear;

// console.log(clcAge3(2001));

// const yearUntilRetirement = (firstName, birthYear) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} you have ${retirement} years left for your retirement.`;
// };
// console.log(yearUntilRetirement("Shahadat", 2001));
// console.log(yearUntilRetirement("Raiyan", 2002));

// ! Functions calls other Functions

// const cutFruitPieces = function (fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return console.log(juice);
// }

// fruitProcessor(2, 3);
