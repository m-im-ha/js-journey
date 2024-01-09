'use strict';

// const bookings = [];
// const bookTickets = function (
//   flight,
//   numPassengers = 1,
//   price = 137 * numPassengers
// ) {
//     ES5
//   numPassengers = numPassengers || 1;
//   price = price || 237;

//   const booking = {
//     flight,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// bookTickets('Lgy22');
// bookTickets('Lgy22', 2);
// bookTickets('Hgy921', 4, 589);
//skipping default parameter and leaving it as it's default by using undefined
// bookTickets('Hgy921', undefined, 1189);

// const flight = 'LHT56';
// const shahed = {
//   personName: 'Shahed Alam',
//   passport: 897653843,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'GTY99';
//   passenger.personName = 'Mr. ' + passenger.personName;

//   if (passenger.passport === 897653843) {
//     alert('checked in');
//   } else {
//     alert('you need to wait');
//   }
// };
// checkIn(flight, shahed);
// console.log(flight);
// console.log(shahed);

// const flightNum = flight;
// const passenger = shahed;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random * 10000000);
// };
// newPassport(shahed);
// checkIn(flight, shahed);

//......................Higher Order Function
// const oneWord = function (str) {
//   return str.replace(/ /g, ' ').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   console.log(first);
//   console.log(...others);
//   return [first.toUpperCase(), ...others].join(' ');
// };
//this is higher order function.
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

//.......................................practice.....................................

// const add = function (a, b) {
//   return 1 + 1;
// };
// // higher order function
// const total = function (x, fn) {
//   console.log(x + fn(x));
// };
// total(5, add);

// const greet = function (greetings) {
//   return function (name) {
//     console.log(`${greetings}, ${name}.`);
//   };
// };
// const greetingHey = greet('Hey');
// greetingHey('Jonas');
// greetingHey('Smith');

//another way,
// greet('Hello')('Kate');

//using arrow function.
// const greet = greetings => name => console.log(`${greetings}, ${name}.`);
// greet('Hey')('Karin');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(name, flightNum) {
//     console.log(
//       `${name} bought a ticket of ${this.airline} and flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name:name });
//   },
// };
// lufthansa.book('Jonas', 341);
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };
// const bookk = lufthansa.book;
//doesn't work.
// book('Sarah', 454);
// bookk.call(eurowings, 'Sarah', 454);
// console.log(eurowings);
// bookk.call(lufthansa, 'Sam', 788);
// console.log(lufthansa);

// const swis = {
//   airline: 'SwisFly',
//   iataCode: 'XZ',
//   bookings: [],
// };
// bookk.call(swis, 'Ethan', 243);
// console.log(swis);

// const applyArr = ['louise', 984];
// bookk.apply(swis, applyArr);
// console.log(swis);

// bookk.call(swis, ...applyArr);

// const bookLH = bookk.bind(lufthansa);
// const bookEW = bookk.bind(eurowings);
// const bookSW = bookk.bind(swis);

// bookLH('Jen', 657);
// bookEW('billy', 887);
// bookSW('giang', 789);

// const bookEW23 = bookk.bind(eurowings, 'Nick');
// bookEW23(231);
// console.log(eurowings);

//with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//         partial application
// const addTex = (rate, value) => value + value * rate;
// console.log(addTex(0.1, 200));

// const addVat = addTex.bind(null, 0.23);
// //const addVat = value => value + value * 0.23;
// console.log(addVat(100));

// const addTexx = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVatt = addTexx(0.23);
// console.log(addVatt(100));

//......................................coding challenge...................................

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     //get answe
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     Register answer.
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'arrray') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 4] });

// const runOnce = function () {
//   console.log('this will never run again');
// };
// runOnce();
// runOnce();

//.......................IIFE
// (function () {
//   console.log('this will never run again');
// })();

// (() => console.log('this will never run again'))();

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passenger`);
//   };
// };
// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);
// h();
// f();
// console.dir(f);
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`there are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`will start boarding in ${wait} seconds.`);
// };

// const perGroup = 1000; //to understand scope priority
// boardPassengers(180, 3);

//........................coding challenge......................

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

//closure example
// const myFunction = () => {
//   let myValue = 2;
//   console.log(myValue);

//   const childFunction = () => {
//     console.log((myValue += 1));
//   };

//   return childFunction;
// };

// const result = myFunction();
// console.log(result);
// result();
// result();
// result();

// Strive for progress, not perfection

//closure example
// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log('after ' + index + ' second(s):' + index);
//   }, index * 1000);
//   console.log(index);
// }

//...........................PRACTICE

