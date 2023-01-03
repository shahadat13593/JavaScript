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
