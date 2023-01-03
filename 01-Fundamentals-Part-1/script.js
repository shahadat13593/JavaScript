// let js = "yes";
// console.log(30 + 90);
// console.log("Jonas");
// console.log(23);

// let firstName = "Raiyan";
// console.log(firstName);
// let PI = 3.1416;
// console.log(PI);

// ! Data type

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof "shahadat");

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// year = 2001;
// console.log(typeof year);

// console.log(typeof null);

//! let, const, var

// let age = 30;
// age = 31;

// const birthYear = 2001;
// birthYear = 2000;
// const job;

// var job = "teacher";

// ! Basic Operator

// ! Arithmetic Operator
// const currentYear = 2023;
// const ageShahadat = currentYear - 2001;
// const agePinky = currentYear - 2002;
// console.log(ageShahadat, agePinky);

// // ? 2 ** 3 means 2 to the power 3
// console.log(ageShahadat * 2, ageShahadat / 10, 2 ** 3);

// const firstName = "Shahadat";
// const lastName = "Hossain";
// console.log(firstName + " " + lastName);

// ! Assignment Operator
// let x = 10 + 5;
// console.log(x);

// x += 10;
// console.log(x);
// x *= 10;
// console.log(x);
// x -= 10;
// console.log(x);
// x /= 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// ! Comparison Operator
// console.log(ageShahadat > agePinky);
// console.log(agePinky >= 18);

// const isFullAge = agePinky >= 18;

// console.log(currentYear - 1991 > currentYear - 2019);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageShahadat + agePinky) / 2;
// console.log(ageShahadat, agePinky, averageAge)

//  ! Coding Challenge #1

// const massOfMark = 78;
// const heightOfMark = 1.69;
// const massOfJohn = 92;
// const heightOfJohn = 1.95;

// const massOfMark = 95;
// const heightOfMark = 1.88;
// const massOfJohn = 85;
// const heightOfJohn = 1.76;
// const markBMI = massOfMark / (heightOfMark * heightOfMark);
// const johnBMI = massOfJohn / (heightOfJohn * heightOfJohn);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// ! String

// const firstName = "Shahadat";
// const job = "programmer";
// const birthYear = 2001;
// const currentYear = 2023;

// const bioOfShahadat = `I am ${firstName}, a ${
//   currentYear - birthYear
// } years old ${job}!`;

// console.log(bioOfShahadat);

// console.log(`Just a regular string...`);
// console.log(
//   "string with\n\
// multiple \n\
// lines"
// );
// console.log(`hi
// how are u?
// bro!`);

// ! If else

// const age = 15;

// if (age >= 18) {
//   console.log("You can have your license! 🚗");
// } else {
//   console.log(`you have to wait ${18 - age} years to have your license!`);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// ! Coding Challenge #2

// const massOfMark = 78;
// const hightOfMark = 1.69;
// const massOfJohn = 92;
// const hightOfJohn = 1.95;

// const massOfMark = 95;
// const hightOfMark = 1.88;
// const massOfJohn = 85;
// const hightOfJohn = 1.76;

// const BIMOfMark = massOfMark / (hightOfMark * hightOfMark);
// const BIMOfJohn = massOfJohn / (hightOfJohn * hightOfJohn);

// if (BIMOfMark > BIMOfJohn) {
//   console.log(
//     `Mark's BMI (${BIMOfMark}) is higher than John's (${BIMOfJohn})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${BIMOfJohn}) is higher than Mark's (${BIMOfMark})!`
//   );
// }

// ! Type conversion and coercion

// ! Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("shahadat"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// ! Type coercion

// console.log("I am " + 23 + " years old");
// console.log("23" - 12);
// console.log("2" * 3);
// console.log("22" / 2);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// ! Truthy and Falsy Values

// ! Falsy Values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean("shahadat"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;

// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log("You should get a job");
// }

// let hight = 0;
// if (hight) {
//   console.log(`YaY! Hight is defined!`);
// } else {
//   console.log("Hight is not defined!");
// }

//! Equality Operator == vs. ===

// const age = "18";
// if (age === 18) {
//   console.log("You just become an adult! (strict)");
// } else {
// }

// if (age == 18) {
//   console.log("You just become an adult! (loose)");
// } else {
// }

// const favorite = Number(prompt("What is your Favorite Number: "));
// console.log(favorite);

// if (favorite === 23) {
//   console.log(`Cool! ${favorite} is amazing number!`);
// } else if (favorite === 7) {
//   console.log(`${favorite} is also amazing number!`);
// } else {
//   console.log(`Number is not 7 or 23!`);
// }

// if (favorite !== 23) {
//   console.log("Why not 23?");
// }

// ! Logical Operator

// const hasDiversLicense = true;
// const hasGoodVision = true;

// const hasDiversLicense = true;
// const hasGoodVision = true;
// console.log(hasDiversLicense && hasGoodVision);
// console.log(hasDiversLicense || hasGoodVision);
// console.log(!hasDiversLicense);

// const shouldDrive = hasDiversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Able to drive!");
// } else {
//   console.log("Not able to drive!");
// }

// const isTried = true;
// console.log(hasDiversLicense && hasGoodVision && isTried);

// if (hasDiversLicense && hasGoodVision && !isTried) {
//   console.log("Able to drive!");
// } else {
//   console.log("Not able to drive!");
// }

//! Coding Challenge #3

// const scoreDolphins_1 = 97;
// const scoreDolphins_2 = 112;
// const scoreDolphins_3 = 101;

// const scoreKoalas_1 = 109;
// const scoreKoalas_2 = 95;
// const scoreKoalas_3 = 106;

// const avgOfDolphins = (scoreDolphins_1 + scoreDolphins_2 + scoreDolphins_3) / 3;
// const avgOfKoalas = (scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3;

// console.log(avgOfDolphins, avgOfKoalas);

// if (avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
//   console.log("Dolphins win the game!");
// } else if (avgOfKoalas > avgOfDolphins && avgOfKoalas >= 100) {
//   console.log("Koalas win the game!");
// } else if (
//   avgOfDolphins === avgOfKoalas &&
//   avgOfKoalas >= 100 &&
//   avgOfDolphins >= 100
// ) {
//   console.log("Match is draw!");
// } else {
//   console.log("No team wins the trophy!");
// }

// ! The Switch Statement

// const day = "saturday";

// switch (day) {
//   case "monday":
//     console.log("Plan to do waste my all day!");
//     console.log("Playing games for all day!");
//     break;

//   case "tuesday":
//     console.log("Have to do coding!");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Have to do Programming!");
//     break;

//   case "saturday":
//   case "sunday":
//     console.log("Enjoying the weekend!");
//     break;

//   default:
//     console.log("Not a valid day!");
// }

// ! Ternary Operator

// const age = 17;
// age >= 18
//   ? console.log("I like to drink wine!🍷")
//   : console.log("I like to drink water!💧");

// const drink = age >= 18 ? "wine 🍷" : "water 💧";

// console.log(`I like to drink ${drink}`);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// ! Coding Challenge #4

// const bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill + tip}`);
