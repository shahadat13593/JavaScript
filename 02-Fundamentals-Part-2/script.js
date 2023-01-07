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

// const friends = ["michael", "Raiyan", "Shahadat"];
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

// !  basic Array methods

// const friends = ["michael", "Raiyan", "Shahadat"];
// ! Add ELEMENTS
// const newLength = friends.push("Jay");
// console.log(friends);

// console.log(newLength);

// friends.unshift("Maliha");
// console.log(friends);

// ! REMOVE ELEMENTS

// const pooped = friends.pop();
// console.log(pooped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Raiyan"));

// console.log(friends.includes("Shahadat"));
// console.log(friends.includes("shahadat"));

// if (friends.includes("Raiyan")) {
//   console.log(`Hi! ${friends[friends.indexOf("Raiyan")]}`);
// }

// !Coding Challenge #2

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// ! Fun

// const feeling = prompt(`What is your feeling now?`);
// let emotion;
// const emotions = () => {
//   switch (feeling) {
//     case "sad":
//     case "angry":
//       emotion =
//         "convert your emotion in to modulation then you can do more hard ";
//       break;

//     case "good":
//     case "fine":
//     case "ok":
//       emotion = "Keep working mate!";
//       break;
//   }
//   return console.log(emotion);
// };
// const thinker = function () {
//   return emotions();
// };

// thinker();

//! Fun 2

// const currentYear = 2023;
// const clcAge = (birthYear) => currentYear - birthYear;
// const birthYear = prompt(`What is your Birth Year?`);
// const age = clcAge(birthYear);
// const bioCreatorOfPerson = function (firstName, lastName, job, day) {
//   const initialBio = `My name is ${firstName} ${lastName}. I am ${age} years old. I am a ${job}.`;
//   const days = () => {
//     switch (day) {
//       case "Monday":
//         return `${initialBio} Today is ${day}.`;

//       case "Tuesday":
//         return `${initialBio} Today is ${day}.`;
//       case "Thursday":
//         return `${initialBio} Today is ${day}.`;
//       case "Wednesday":
//         return `${initialBio} Today is ${day}.`;
//       case "Friday":
//         return `${initialBio} Today is ${day}.`;
//       case "Saturday":
//         return `${initialBio} Today is ${day}.`;
//       case "Sunday":
//         return `${initialBio} Today is ${day}.`;
//       default:
//         return `${initialBio} Type a valid day!`;
//     }
//   };
//   console.log(days());
// };

// if (age === 22) {
//   const bio = ["Shahadat", "Hossain", "Programmer", "Monday"];
//   bioCreatorOfPerson(bio[0], bio[1], bio[2], bio[3]);
// } else {
//   bioCreatorOfPerson("Maliha", "Samar", "Codder", "Sunday");
// }

// console.log(
//   `My name is Shahadat Hossain. I am 22 years old. I am a Programmer. Today is Monday.`
// );
// ! Objects

// const shahadat = {
//   firstName: "Shahadat",
//   lastName: "Hossain",
//   age: 2023 - 2001,
//   job: "Programmer",
//   friends: ["Kamal", "Jamal", "Karim"],
// };

// console.log(shahadat);

// ! Dot
// console.log(shahadat.lastName);

// ! Bracket Notation
// console.log(shahadat["lastName"]);
// const partOfLastName = "first";
// console.log(shahadat[`${partOfLastName}Name`]);

// const interestedIn = prompt(`What do you want to know about me?
//  Choose between: firstName, lastName, age, job and friends`);

// if (shahadat[interestedIn]) {
//   console.log(shahadat[interestedIn]);
// } else {
//   console.log(`Choose a valid Property!`);
// }

// shahadat.location = "Bangladesh";
// shahadat["email"] = "sahadat15-13593@diu.edu.bd";

// console.log(shahadat);

// ! Challenge
// console.log(
//   `${shahadat.firstName} has ${shahadat["friends"].length} friends, and his best friend is ${shahadat.friends[0]}`
// );

// ! Object Methods

// const shahadat = {
//   firstName: "Shahadat",
//   lastName: "Hossain",
//   birthYear: 2001,
//   job: "Programmer",
//   friends: ["Kamal", "Jamal", "Karim"],
//   hasDriversLicense: true,
//   // clcAge: function (birthYear) {
//   //   return 2023 - birthYear;
//   // },

//   // clcAge: function () {
//   //   // console.log(this);
//   //   return 2023 - this.birthYear;
//   // },

//   clcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return console.log(
//       `${this.firstName} is a ${this.clcAge()}-year old ${
//         this.job
//       }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
//     );
//   },
// };

// shahadat.clcAge();
// console.log(shahadat.age);

// // ! Challenge
// shahadat.getSummary();

// ! Coding Challenge #3

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.9,
//   calcBMI: function () {
//     this.BMIMark = this.mass / this.height ** 2;
//     return this.BMIMark;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 99,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMIJohn = this.mass / this.height ** 2;
//     return this.BMIJohn;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (john.BMIJohn > mark.BMIMark) {
//   console.log(
//     `John's BMI (${john.BMIJohn}) is higher than Mark's (${mark.BMIMark}))`
//   );
// } else if (mark.BMIMark > john.BMIJohn) {
//   console.log(
//     ` Mark's BMI (${mark.BMIMark}) is higher than John's (${john.BMIJohn}))`
//   );
// }

// ! The for Loops

// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);
// console.log(`Lifting weight repetition 1`);

// for (let i = 1; i <= 60; i++) {
//   console.log(`Lifting weight repetition ${i}`);
// }

// ! Looping arrays, breaking and continuing

// const shahadat = [
//   "Shahadat",
//   "Hossain",
//   2023 - 2001,
//   "Programmer",
//   ["Kamal", "Jamal", "Karim"],
//   true,
// ];

// const types = [];
// for (let i = 0; i <= shahadat.length - 1; i++) {
//   // reading array
//   console.log(shahadat[i], typeof shahadat[i]);

//   // Filling array
//   // types[i] = typeof shahadat[i];

//   types.push(typeof shahadat[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];

// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2037 - years[i]);
// }

// console.log(age);

// ! Continue

// console.log(shahadat);
// console.log("=== Only String ===");

// for (let i = 0; i <= shahadat.length - 1; i++) {
//   if (typeof shahadat[i] !== "string") continue;
//   console.log(shahadat[i], typeof shahadat[i]);
// }

// ! Break

// console.log("=== Break with number ===");

// for (let i = 0; i <= shahadat.length - 1; i++) {
//   if (typeof shahadat[i] === "number") break;
//   console.log(shahadat[i], typeof shahadat[i]);
// }

// ! Lopping Backwards and Loops in Loops

// const shahadat = [
//   "Shahadat",
//   "Hossain",
//   2023 - 2001,
//   "Programmer",
//   ["Kamal", "Jamal", "Karim"],
//   true,
// ];

// for (let i = shahadat.length - 1; i >= 0; i--) {
//   console.log(shahadat[i]);
// }

// for (let i = shahadat.length - 1; i >= 0; i--) {
//   console.log(i, shahadat[i]);
// }

// ! Loop inside another loop

// for (let exe = 1; exe <= 3; exe++) {
//   console.log(`---------- string exercise ${exe} ------------`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exe}: Lifting weight repetition ${rep}🏋️‍♂️`);
//   }
// }

// ! While Loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weight repetition ${i}`);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(`Lifting weight repetition ${i}`);
//   i++;
// }

// let dice = Math.trunc(Math.random() * 6 + 1);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6 + 1);
// }

// ! Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tip = [];
// const total = [];

// const calcTip = function (bill) {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };

// for (let i = 0; i <= bills.length - 1; i++) {
//   tip.push(calcTip(bills[i]));
//   total.push(bills[i] + tip[i]);
// }
// for (let i = 0; i <= bills.length - 1; i++) {
//   total.push(bills[i] + tip[i]);
// }

// console.log(`Bills: ${bills}`);
// console.log(`Tips: ${tip}`);
// console.log(`Totals: ${total}`);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);

// return sum;

//   const totals = () => sum / arr.length;
//   //   console.log(totals());
//   return console.log(`Average of an array: ${totals()}`);
// };

// calcAverage(total);
// calcAverage(tip);

sdpsdposkd;

sodsokdopskd;
