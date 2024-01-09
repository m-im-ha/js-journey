'use strict';

// const name = 'jonas';

// const first = () => {
//   let a = 1;
//   const b = second(5, 1);
//   console.log(b);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   var c = 2;
//   console.log(c);
//   return c;
// }
// const x = first();
// console.log(x);

// function calcAge(birthYear) {
//   const now = 2055;
//   const age = now - birthYear;
//   return age;
// }
// console.log(now);

// const myName = 'jonas';
// function first() {
//   const age = 30;

//   if (age >= 30) {
//     const decade = 3;
//     var millenial = true;
//   }

//   function second() {
//     const job = 'teacher';
//     console.log(decade);
//     console.log(millenial);
//     console.log(`${myName} is ${age} years old ${job}.`);
//   }
//   second();
// }
// console.log(millenial);
// first();

// const a = 'jonas';
// first();

// function first() {
//   const b = 'Hello!';
//   second();

//   function second() {
//     const c = 'Hi';

//     third();
//   }
// }

// function third() {
//   const d = 'Hey';
//   console.log(d+b+c+a);
// }
// first();

// const calcAge = function (birthYear) {
//   console.log(firstName);
//   const age = 2055 - birthYear;

//   const printAge = function () {
//     let output = `${firstName},\nyou are ${age} years old, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Steven';
//       var millenial = true;
//       const str = `${firstName}! You are a millenial`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = `new output`;
//       console.log(output);
//       console.log(add(1, 2));
//     }

//     console.log(add(1, 2));
//     console.log(millenial);
//     console.log(output);
//   };
//   printAge();

//   return age;

//   printAge();
// };
//  calcAge(2000);
// const firstName = 'jonas';
// calcAge(1991);

// const myName = 'jonas';
// if (myName === 'jonas') {
//    console.log(`jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = 'teacher';
//   console.log(x);
// }

// console.log(hhh);
// const hhh = 'j';

// add(1,2);
// const add = function (a,b){
//   console.log(a+b);
// }
// add(1,2);

// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'jonas';
// let job = 'teacher';
// const year = 1992;

// console.log(add(1,2));
// console.log(addExp(1,2));
// console.log(addArrow(1,2));
// function add(a,b){
//   return a+b;
// };
// const addExp = function(a,b){
//   return a+b;
// };
// let addArrow = (a,b) => a+b;

// console.log(numProduct);
// if (!numProduct) deleteShoppingCart();
// var numProduct = 10;
// console.log(numProduct);
// function deleteShoppingCart() {
//   console.log('All product deleted.');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2066 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2066 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2066 - this.year);
//   },
// };
// jonas.calcAge();
// const matila = {
//   year: 1999,
// };
// matila.calcAge = jonas.calcAge;
// matila.calcAge();

// const f = jonas.calcAge;
// f();
// var firstName = 'matila';

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2066 - this.year);

// const self = this;
// const ismillenial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// ismillenial();

// const ismillenial = () => {
//   console.log(this);
//   console.log(this.year >= 1981 && this.year <= 1996);
// };
// ismillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`hey, ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// const ismillenial = function () {
//   console.log(this);
//   console.log(this.year >= 1981 && this.year <= 1996);
// };
// ismillenial();

//  arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   console.log(a + b);
// };
// addExpr(1, 2);
// addExpr(3, 2, 10, 10);
// var addArray = (a, b) => {
//   console.log(arguments);
//   console.log(a + b);
// };
// addArray(1, 2);
// addArray(2, 2, 10, 10);

// const me = {
//   name: 'jonas',
//   age: 31,
// };
// const friend = me;
// friend.age = 29;
// console.log(`me:`, me);
// console.log(`friend:`, friend);

// let lastName = 'williams';
// let oldLastName = lastName;
// lastName = 'davis';
// console.log(lastName);
// console.log(oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log(jessica, marriedJessica);

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Mary', 'john');
// console.log(jessica2.family);
// console.log(jessicaCopy.family);

// console.log('before marriage:', jessica2, '\n', 'after marriage:', jessicaCopy);

//...........................PRACTICE............................

// const tobi = {a:1,b:2};
// const kakashi = {b:3,d:4};
// const output = Object.assign(tobi,kakashi);
// console.log(output);
// console.log(tobi);
// console.log(kakashi);

// const a = {x:11};
// const b = Object.assign({},a);
// console.log(a);
// b.x = 22;
// console.log(b);

// const rin = {
//   first_name : 'Rin',
//   last_name : 'Tsuki',
//   age : 31,
//   family: ['father','mother'],
// }

// const rin_married = Object.assign({},rin);
// rin_married.last_name = 'Uchiha';
// rin_married.family.push('Tobirama Uchiha');
// console.log(`Before Marriage: `,rin);
// console.log(`After Marriage: `,rin_married);

// let angle = ["X","y"];
// angle.length = 0;
// console.log(angle);
// console.log(angle[0]);
