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

// ! Reviewing Functions

// const yearUntilRetirement = (firstName, birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} you have ${retirement} years left for your retirement.`;
//     // return retirement;
//   } else {
//     return `${firstName} has already Retired!`;
//     // return -1;
//   }
// };
// console.log(yearUntilRetirement("Shahadat", 1991));
// console.log(yearUntilRetirement("Raiyan", 1950));

// ! Coding Challenge #1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const averageOfDolphins = calcAverage(85, 54, 41);
// const averageOfKoalas = calcAverage(23, 34, 27);
// console.log(averageOfDolphins, averageOfKoalas);

// const checkWinner = function (averageOfDolphins, averageOfKoalas) {
//   if (averageOfDolphins >= 2 * averageOfKoalas) {
//     return `Dolphins win (${averageOfDolphins} vs. ${averageOfKoalas})`;
//   } else if (averageOfKoalas >= 2 * averageOfDolphins) {
//     return `Koalas win (${averageOfKoalas} vs. ${averageOfDolphins})`;
//   } else {
//     return `No team wins!`;
//   }
// };

// console.log(checkWinner(averageOfDolphins, averageOfKoalas));

// ! Arrays

// const friend1 = "michael";
// const friend2 = "Raiyan";
// const friend3 = "Shahadat";

const friends = ["michael", "Raiyan", "Shahadat"];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// const year = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const shahadat = ["Shahadat", "Hossain", 2023 - 2001, "student", friends];

// console.log(shahadat);

// ! Exercise of Arrow
// const clcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1998, 1967, 2002, 2010, 2017];

// console.log(clcAge(years[0]));
// console.log(clcAge(years[1]));
// console.log(clcAge(years[years.length - 1]));

// const ages = [clcAge(years[0]), clcAge(years[1]), years[years.length - 1]];

// console.log(ages);
