"use strict";

// let driver_license = false;
// let test_pass = true;
// if (test_pass) driver_license = true;
// if (driver_license) console.log("hey, you can drive");

// function fruitProcessor(numOfApples, numOfOranges) {
//   const juice = `Juice with ${numOfApples} apples and ${numOfOranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// function declaration.
// function age(birth_year) {
//     return 2065 - birth_year;
// }
// console.log(age(2000));

// function expression.
// const another_age = function(birthh_year){
//     return 2065 - birthh_year;
// };
// console.log(another_age(2000));

// arrow function.
// let other_age = birth_year => 2065 - birth_year;
// console.log(other_age(2000));

// const yearUntilRetirement = (birth_year, first_name) => {
//     const age = 2023 - birth_year;
//     const retirement = 65 - age;
//     return `${first_name} retires in ${retirement} years.`
// }
// console.log(yearUntilRetirement(1963,'jackie'));

// function fruitPiece(fruit){
//     return fruit*4;
// }
// function juice_maker(apple, orange) {
//     const applePiece = fruitPiece(apple);
//     const orangePiece = fruitPiece(orange);
//     const juice = `juice with ${applePiece} apple pieces and ${orangePiece} orange pieces.`;
//     return juice;
// }
// console.log(juice_maker(3,2));

// function thatage(birth_year){
//     return 2023 - birth_year;
// }
// const yearUntilRetirement = function (birth_year, first_name){
//     const age = thatage(birth_year);
//     const retirement = 65- age;
//     if(retirement > 0){
//         console.log(`${first_name} retires in ${retirement} years.`)
//         return retirement;
//     }else{
//         console.log(`${first_name} already retired.`)
//         return -1;
//     }
// return `${first_name} retires in ${retirement} years.`
// }
// console.log(yearUntilRetirement(1963,'Jackie'));
// console.log(yearUntilRetirement(1923,'Bulbul'));

// let calcAverage = (score1,score2,score3) => (score1+score2+score3)/3 ;
// let scoreDolphins = calcAverage(85,54,41);
// let scoreKoalas = calcAverage(23,34,27);

// function checkWinner(avgDolphins,avgKoalas){
//     if(avgDolphins >= avgKoalas*2){
//         console.log(`Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if (avgKoalas >= avgDolphins*2){ console.log(`Koalas wins 🏆(${avgKoalas} vs. ${avgDolphins})`)}
//     else console.log(`no one wins.`)
// }
// checkWinner(scoreDolphins,scoreKoalas);
//another data.
// scoreDolphins = calcAverage(44,23,71);
// scoreKoalas = calcAverage(65,54,49);
// checkWinner(scoreDolphins,scoreKoalas);

// function calcAge(birth_year) {
//     return 2065 - birth_year;
// };
// const years = new Array(1990,1995,2003,2009);
// console.log(years);
// const ages = [1990,1999,2001,2005];
// const age1 = calcAge(ages[0]);
// const age2 = calcAge(ages[2]);
// const age3 = calcAge(ages[ages.length-1]);
// console.log(age1,age2,age3);
// const ageArr = [calcAge(ages[0]),calcAge(ages[2]),calcAge(ages[ages.length-1])];
// console.log(ageArr);

const friends = ["Michael", "James", "Ray"];

// let friendsPush = friends.push('Zack');
// console.log(friends);
// console.log(friends.length);
// console.log(friendsPush);

// let friendsUnshiftLength = friends.unshift('Peter');
// console.log(friends);
// console.log(friendsUnshiftLength);

// let friendsPop = friends.pop();
// console.log(friends);
// console.log(friendsPop);

// let friendsShift = friends.shift();
// console.log(friends);
// console.log(friendsShift);

// console.log(friends.indexOf('Ray'));
// console.log(friends.indexOf('Michael'));
// console.log(friends.indexOf('Zack'));
// console.log(friends.indexOf('sherlock'));

// friends.push(23)
// console.log(friends.includes('Zack'));
// console.log(friends.includes('Ray'));
// console.log(friends.includes('23'));//includes method is strict.
// if(friends.includes('Ray')){
//     console.log('You have a friend called Ray');
// }

// const number = [11, 22, 33, 44, 55];
// let big_number = (num) => num > 24;
// let result = number.findIndex(big_number);
// console.log(result);

// function calcTip(x){
//     if(x<=300 && x>=50){
//         return x*0.15;
//     }
//     else{
//         return x*0.2;
//     }
// }
// console.log(calcTip(100));
// const bills = [125,555,44];
// const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length-1]) ];
// console.log(tips);
// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[bills.length-1]+tips[tips.length-1]];
// console.log(total);

// const elon = {
//   first_name: "Elon",
//   last_name: "Mask",
//   age: 2065 - 1990,
//   job: "Engineer",
//   friends: ["James", "Edward", "Philips"],
// };
// console.log(elon);
// console.log(elon.job);
// console.log(elon["job"]);

// const namekey = "name";
// console.log(elon["first_" + namekey]);
// console.log(elon["last_" + namekey]);

// const interestIn = prompt(
//   `what do you want to know about elon? Choose between first_name, last_name, age, job, friends`
// );
// console.log(elon[interestIn]);
// if (elon[interestIn]) {
//   console.log(elon[interestIn]);
// } else console.log(`Choose between first_name, last_name, age, job, friends`);

// elon.location = 'Korea';
// elon['twitter'] = '@SAno2288';
// console.log(elon);
// console.log(`Elon has ${elon.friends.length} friends, and his best friend is ${elon.friends[elon.friends.length-1]}.`);

// const elon = {
//   first_name: "Elon",
//   last_name: "Mask",
//   bornYear: 1990,
//   job: "Engineer",
//   friends: ["James", "Edward", "Philips"],
//   hasLicense: false,

//   calcAge: function (birthYear) {
//     return 2065 - birthYear;
//   },
//   calcAge: function () {
//     console.log(this);
//     return 2065 - this.bornYear;
//   },
//   calcAge: function () {
//     console.log(this);
//     this.age = 2065 - this.bornYear;
//     return this.age;
//   },
//   summary: function () {
//     return `${this.first_name} is a ${this.calcAge()} years old ${
//       this.job
//     } and he has ${this.hasLicense ? "a" : "no"} driver license.`;
//   },
// };

// console.log(elon.calcAge());
// console.log(elon.age);
// console.log(elon.age);
// console.log(elon['calcAge'](1990));
// console.log(elon.summary());

// const mark = {
//     markFullName : 'Mark Miller',
//     markMass : 78,
//     markHeight : 1.69,
//     calcBmi : function(){
//         this.markBmi = this.markMass/ this.markHeight ** 2;
//         return this.markBmi;
//     }
// };
// const john = {
//     johnFullName : 'John Smith',
//     johnMass : 92,
//     johnHeight : 1.95,
//     calcBmi : function(){
//         this.johnBmi = this.johnMass/ this.johnHeight ** 2;
//         return this.johnBmi;

//     }
// }
// if(mark.calcBmi() > john.calcBmi()){
//     console.log(`${mark.markFullName}'s BMI(${mark.calcBmi()}) is higher than ${john.johnFullName}'s BMI(${john.calcBmi()})`);
// }else{
//     console.log(`${john.johnFullName}'s BMI(${john.calcBmi()}) is higher than ${mark.markFullName}'s BMI(${mark.calcBmi()})`);
// }

// for(let rep=1; rep<10; rep++){
//     console.log(`lifting weight repitition ${rep}`);
// }

// const jonas = [
//   "Elon",
//   "Mask",
//   2067 - 1990,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const newArr = [];
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   newArr[i] = typeof jonas[i];
//   newArr.push(jonas[i]);
// }
// console.log(newArr);

// const years = [1980,1990,2000,2010,2020];
// const ages = [];
// for(let i=0; i<years.length; i++){
//     ages.push(2065 - years[i]);
// };
// console.log(ages);

// console.log(`-----continue with string`);
// for(let i=0;i<jonas.length; i++){
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// };

// console.log(`-----break with number`);
// for(let i=0;i<jonas.length; i++){
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// };

//way of !==
// for(let i=0; i<10; i++){
//     if(i !== 5) continue;
//     console.log(i);//it will show only 5
// }

//way of ===
// for(let i=0; i<10; i++){
//     if(i === 5) continue;
//     console.log(i);//it will show everything without 5
// }

// let bills = [22,295,176,440,37,105,10,1100,86,52];
// let tips = [];
// let totals = [];
// const calctip =  function (x){
//         if(x<=300 && x>=50){
//              return x*0.15;
//          }
//          else{
//              return x*0.2;
//         }
// }
// for(let i=0; i<bills.length; i++){
//     tips.push(calctip(bills[i]));
//     totals.push(calctip(bills[i]) + bills[i]);
// };
// console.log(tips, totals);

// const givenArr = [22,295,176,440,37,105,10,1100,86,52];
// const calcAvg = function(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum / arr.length);
// }
// calcAvg(givenArr);
// calcAvg(totals);
// calcAvg(tips);

//....................PRACTICE.................

// let str = "agohurgghhrr";
// let array = [];
// let strDivide = str.split("");
// // console.log(strDivide);
// for (let x of strDivide) {
//   if (x.includes("a")) {
//     array.push(x);
//   }
//   if (x.includes("o")) {
//     array.push(x);
//   }
// }
// console.log(array.length);

// .........  another coolway

// let numOfVowels = str.split("").filter((a) => "aeiou".includes(a)).length;
// console.log(numOfVowels);

// const a = ["ipl", "psl", false, 123, 234, "bpl", true];

// for (let i = 0; i < a.length; i++) {
//   if (typeof a[i] !== "string") continue;
//   console.log(a[i]);
// }
// for (let i = 0; i < a.length; i++) {
//   if (typeof a[i] === "string") continue;
//   console.log(a[i]);
// }
// for (let i = 0; i < a.length; i++) {
//   if (typeof a[i] === "boolean") break;
//   console.log(a[i]);
// }

// let n = 0;
// while(n<10){
//     n++;
//     if(n===5){
//         continue;
//     }
//     console.log(n);
// }

// for (let i = 1; i < 5; i++) {
//   for (let k = i; k < 5; k++) {
//     console.log(i, k);
//   }
// }

// for (let i = 1; i < 3; i++) {
//   for (let k = i; k < 3; k++) {
//     for(let p = k; p < 3; p++){
//       console.log(i, k, p);
//     }
//   }
// }

// let str = "monkeyzx";
// console.log(str.endsWith("zx"));
// console.log(str.lastIndexOf('y'));
// let last_two_characters = str.split("").splice(-2,2).join("");
// console.log(last_two_characters);

// let a = function (str, ending) {
//   return str.endsWith(ending);
// };
// console.log(a("billu", "llu"));
// console.log(a("billu", "bi"));
// console.log(a("vivi", "iv"));

// let arr1 = ["a", "b", "c"];
// let arr2 = ["x", "b", "c"];
// let unknownValue = arr2.filter((element) => !arr1.includes(element));
// console.log(unknownValue);

// let str = "abvfacfdxxzz";
// let a_to_m = "abcdefghijklm";
// // console.log(str.split(''));
// let strArr = str.split("");
// let a_to_mArr = a_to_m.split("");
// let unknownValues = strArr.filter((element) => !a_to_mArr.includes(element));
// console.log(unknownValues);
// console.log(`${unknownValues.length}` + "/" + `${strArr.length}`);

// let f = function (input) {
//   let arr2 = [];
//   let sum = 0;
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       arr2.push(input[i]);
//     } else {
//       sum += input[i];
//     }
//   }
//   return [arr2.length, sum];
// };
// let qq = f([1, 2, 3, 4, 5, 6, 7, 8, 9, -10, -10]);
// console.log(qq);

// let rx = [];
// console.log(rx.length);

//............LECTURE: Function

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} milion people and it's capital city is ${capitalCity}.`;
// }
// let x = describeCountry("BD", 170, "Dhaka");
// let y = describeCountry("UK", 60, "London");
// let z = describeCountry("Viet", 50, "Hanoi");

// console.log(x, y, z);

//............LECTURE: Function Declaration vs Expression

//function expression

// const world_population = 7900;
// const percentage_of_world1 = function (population) {
//   return (population / world_population) * 100;
// };
// const bd = percentage_of_world1(170);
// const uk = percentage_of_world1(70);
// const ch = percentage_of_world1(1441);
// console.log(bd.toFixed(1), uk.toFixed(1), ch.toFixed(1));

//arrow function

// const world_population = 7900;

// const percentage_of_world3 = (population) =>
//   (population / world_population) * 100;

// const bd = percentage_of_world3(170);
// const uk = percentage_of_world3(70);
// const ch = percentage_of_world3(1441);
// console.log(bd.toFixed(1), uk.toFixed(1), ch.toFixed(1));

//......Funtion calling other functions

// const world_population = 7900;
// const percentage_of_world3 = (population) =>
//   (population / world_population) * 100;

// const describe_population = (country, population) => {
//   return `${country} has ${population} million people,which is about ${percentage_of_world3(
//     population
//   ).toFixed(1)}% of the world.`;
// };
// const country_a = describe_population("BD", 170);
// const country_b = describe_population("UK", 70);
// const country_c = describe_population("CH", 1441);
// const country_d = describe_population("VIET",90) 1441);
// console.log(country_a, country_b, country_c,country_d);

//.......Introduction to arrays.

// const populations = [170, 70, 1441, 80];
// console.log(populations.length === 4);

// const world_population = 7900;
// let percentages = [];
// const percentage_of_world3 = (population) =>
//   (population / world_population) * 100;

// const bd = percentage_of_world3(170).toFixed(1);
// const uk = percentage_of_world3(70).toFixed(1);
// const ch = percentage_of_world3(1441).toFixed(1);
// const viet = percentage_of_world3(90).toFixed(1);
// percentages.push(bd, uk, ch, viet);
// console.log(percentages);

// const calcTip = (x) => {
//   if (x <= 300 && x >= 50) {
//     return x * 0.15;
//   } else {
//     return x * 0.2;
//   }
// };
// const given_tip = calcTip(100);
// console.log(given_tip);

// const bills = [90, 30, 146, 290, 530];
// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[2]),
//   calcTip(bills[3]),
//   calcTip(bills[4]),
// ];
// console.log(tips);
// const total = [
//   bills[0] + tips[0],
//   bills[1] + tips[1],
//   bills[2] + tips[2],
//   bills[3] + tips[3],
//   bills[4] + tips[4]];
// console.log(total);


// for(let rep = 1; rep < 11; rep++){
//   if(rep === 5) continue;
//   console.log(`ligting weight repitation ${rep}`);
// }

// let num = 10;
// if(!(num > 100)) {
//   console.log(`${num} is less than or equal 100`);
// };
