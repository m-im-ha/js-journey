'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements, sort = false) {
//   containerMovements.innerHTML = '';

//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((ac, mov) => ac + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements.filter(v => v > 0).reduce((ac, v) => ac + v, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const outs = acc.movements.filter(v => v < 0).reduce((acc, v) => acc + v, 0);
//   labelSumOut.textContent = `${Math.abs(outs)}€`;

//   const interest = acc.movements
//     .filter(v => v > 0)
//     .map(v => (v * acc.interestRate) / 100)
//     .filter(v => v >= 1)
//     .reduce((ac, v) => ac + v, 0);
//   labelSumInterest.textContent = `${Math.trunc(interest)}€`;
// };

// const creatUserName = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(value => value[0])
//       .join('');
//   });
// };
// creatUserName(accounts);

// const updateUI = function (acc) {
//   //display movements
//   displayMovements(acc.movements);

//   //display balance
//   calcDisplayBalance(currentAccount);

//   //display summary
//   calcDisplaySummary(currentAccount);
// };

// //Event Handler

// let currentAccount;
// btnLogin.addEventListener('click', function (e) {
//   //prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(v => v.username === inputLoginUsername.value);
//   // console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     //display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;

//     //clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();

//     //update UI
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputTransferAmount.value);

//   const receiverAcc = accounts.find(v => v.username === inputTransferTo.value);

//   //  clear input fields
//   inputTransferAmount.value = inputTransferTo.value = '';

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     //doing transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     //update UI
//     updateUI(currentAccount);
//   }
// });

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (amount > 0 && currentAccount.movements.some(v => amount * 0.1)) {
//     //add movement
//     currentAccount.movements.push(amount);

//     //update UI
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = '';
//   inputLoanAmount.blur();
// });

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       v => v.username === currentAccount.username
//     );
//     //delete account
//     accounts.splice(index, 1);
//     //hide UI
//     containerApp.style.opacity = 0;
//   }
//   inputCloseUsername.value = inputClosePin.value = '';
// });

// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr);

//                           slice  ==>  won't mutate

// console.log(arr.slice(2));
// console.log(typeof arr);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(1, -2).length);
// console.log(arr.slice());
// console.log([...arr]);
// console.log(...arr);

//                            splice   ==>  Mutate array

// console.log(arr.splice(2));
// arr.splice(-1); //here -1 means last element will be deleted.
// console.log(arr);
// arr.splice(1, 2); //here 1 is start position and 2 is number of element want to delete
// console.log(arr);

//                           reverse  ==> Mutate array

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

//                          concat   ==>  won't mutate

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

//                          join

// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);

//                          at

// console.log(arr.at(0));

//......getting last element of array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// ...................at method also works with strings.

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, x] of movements.entries()) {
//   if (x > 0) {
//     console.log(`movement ${i + 1}: you deposited ${x}`);
//   } else {
//     console.log(`movement ${i + 1}: you withdrew ${Math.abs(x)}`);
//   }
// }

// console.log('KA ME HA ME HAAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!');

// Note continue and break statements doesn't work on forEach method.so,should use for of method when need to work with break/continue.

// movements.forEach(function (x, i, arr) {
//   console.log(
//     x > 0
// ? `movement ${i + 1}: you deposited ${x}`
//       : `movement ${i + 1}: you withdrew ${Math.abs(x)}`
//   );
// });

//         ---------------------------Map------------------------------

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}.`);
// });
// console.log(currencies);

// -------------------------Set---------------------------------

// const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}.`);
// });

//.........................Map  ==>  map method does not change the original array.

// you can also see
// that the original movements array
// was not mutated at all right?
// And so indeed the map method really only returns
// in new array with the new elements.Now you could say, that what we did here
// with this map method is essentially the same
// as what we did with the, foreach method.
// But in fact, there is a big, big difference
// between these two approaches.
// So before we printed each line individually
// to the console, as we were looping over the array.
// So in each of the iterations, we performed some action
// that was then visible in the console
// and we can call this a side effect.
// So the, foreach method creates side effects.
// But now here with this map method,
// all we did was to return each
// of the strings from the callback.
// And so basically they got added into a new array.
// And then finally we logged that entire array
// to the console and not the elements one by one.
// And so here in this map method
// we did not create a side effect in each of the iteration.
// All we did was to build a brand new array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const movementsUsd = movements.map(function (value) {
//   return value * eurToUsd;
// });

//with arrow function
// const movementsUsd = movements.map(value => value * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// NOTE for of loop also give same result but not like functional programming of map method,so its better to use map method because its more functional.

// The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn’t return anything.

// You can use the forEach method to mutate the source array, but this isn't really the way it's meant to be used. Instead, it's great for when you need to do some action with each element of the array.

// On the other hand, the map method is used for creating a new array, and thus, it’s chainable. You can call a number of map operations one after the other.

// The forEach method doesn’t return anything, so you can’t chain it with any other methods—it’s not chainable.

// const movementsUsdFor = [];
// for (const mov of movements) movementsUsdFor.push(mov * eurToUsd);
// console.log(movementsUsdFor);

// const movementsDescriptions = movements.map(
//   (x, i) =>
//     `movement ${i + 1}: you ${x > 0 ? 'deposited' : 'withdrew'} ${Math.abs(x)}`
// );
// console.log(movementsDescriptions);

//-------------------------------Filter---------------------------------
// filter for elements that satisfy a certain condition.

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(value => value > 0);
// const withdrawals = movements.filter(value => value < 0);
// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

//-----------------------------Reduce---------------------------
// ==> most powerful array method.
// we use the reduce method to essentially boil down all the elements in an array to one single value.

// const balance = movements.reduce((acc, v, i, arr) => acc + v, 0);
// console.log(balance);

// accumulator => snowball.

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);
// const balance = movements.reduce(function (acc, v, i, arr) {
//   console.log(`iteration ${i}: ${acc} ${v}`);
//   return acc + v;
// }, 0);
// console.log(balance);

//finding maximum value
// console.log(Math.max(...movements));

// const max = movements.reduce((acc, v) => {
//   if (acc > v) {
//     return acc;
//   } else {
//     return v;
//   }
// }, movements[0]);
// console.log(max);

// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );
// console.log(max);

// const min = movements.reduce(
//   (acc, mov) => (acc < mov ? acc : mov),
//   movements[0]
// );
// console.log(min);

//..............chaining method.............NOTE don't make chaining much longer. don't use splice and reverse method in large program or big application because it's a bad practice and also sometimes it occurs problems.we could of course chain many other methods here as well,as long as they return new arrays.

// const eurToUsd = 1.1;
// const totalDepositToUsd = movements
//   .filter(v => v > 0)
//   .map(v => v * eurToUsd)
//   .reduce((acc, v) => acc + v, 0);
// console.log(Math.trunc(totalDepositToUsd));

//console.log(movements);
// const pp = movements.findIndex(x=> x === 3000);
// console.log(pp);

// console.log(movements.indexOf(3000));

//------------------------find------------------------------
// we can use the Find method to retrieve one element of an array based on a condition.
// ==>Now, unlike the Filter method,
// the Find method will actually not return a new array
// but it will only return the first element
// in the array that satisfies this condition.

// const firstWithdrawal = movements.find(v => v < 0);
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);
// const account = accounts.find(v => v.owner === 'Jessica Davis');
// console.log(account);

//same thing with for of.......
// let accObj;
// for (const x of accounts) {
//   if (x.owner === 'Jessica Davis') accObj = x;
// }
// console.log(accObj);
// //another way
// let accObject;
// for (const x of accounts) {
//   if (x.owner === 'Jessica Davis') {
//     accObject = x;
//     break;
//   }
// }
// console.log(accObject);
// //another way
// for (const x of accounts) {
//   x.owner === 'Jessica Davis' && console.log(x);
// }

// console.log(movements);
//in includes method we check equality
// console.log(movements.includes(-400));

//.......................SOME ==> in some method we check condition

// const anyDeposits = movements.some(v => v > 0);
// console.log(anyDeposits);
// console.log(movements.some(v => v === 2000));

//.......................EVERY ==> in every method everything need to true.
// console.log(account4.movements.every(v => v > 0));

//separate callbacks
// const deposit = v => v > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//...................flat......................
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(v => v.movements);
// const allAccountMovements = accountMovements.flat();
// console.log(allAccountMovements);
// const sumAll = allAccountMovements.reduce((preV, currV) => preV + currV, 0);
// console.log(sumAll);

//with chaining
// const sum_all = accounts
//   .map(v => v.movements)
//   .flat()
//   .reduce((preV, currV) => preV + currV, 0);
// console.log(sum_all);

//..................flatMap ==> flatMap only go 1level deep,if needs to go more level deep then use flat method.

// const x = accounts.flatMap(v => v.movements);
// console.log(x);
// const sum_all2 = accounts
//   .flatMap(v => v.movements)
//   .reduce((preV, currV) => preV + currV, 0);
// console.log(sum_all2);

//sort--String ==> sort method mutate original array. Default sort order is ascending.
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

//sort--Number ==> sort method mutate original array
// console.log(movements);
// console.log(movements.sort());
// console.log(movements);

//Ascending -- from small to large.
// console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
//another way
// movements.sort((a, b) => a - b);
// console.log('Ascending: ', movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
//another way
// movements.sort((a, b) => b - a);
// console.log('Descending: ', movements);

//          PRACTICE
// const arr = [3, 7, 1, 8, 2, 9];
// arr.sort();
// console.log(arr);

// const spiceGirls = [
//   { name: 'ginger', age: 37 },
//   { name: 'spoty', age: 30 },
//   { name: 'posh', age: 20 },
//   { name: 'baby', age: 19 },
// ];
// const comparator = (a, b) => {
//   // return a.age - b.age;
//   return a.name.length - b.name.length;
// };
// console.log(spiceGirls.sort(comparator)); //posh and baby has same length but posh appear first because posh is first in the initial ordering.

// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//empty array
// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));

//fill
// x.fill(0, 3, 5);
// console.log(x);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(23, 4, 6);
// console.log(arr);

//Array.from

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

//..........empty array + fill method...............
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const x = new Array(7);
// console.log(x);
// x.fill('⭐', 4, 6);
// console.log(x);

//................Array.from method.............
// const y = Array.from({ length: 5 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (curr, i) => i + 1);
// console.log(z);

//........array with 100 random dice roll.
// const randomDiceArray = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random() * 6 + 1)
// );
// console.log(randomDiceArray);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// });

//   ==>  array methods practice
//1
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((preV, currV) => preV + currV, 0);
// console.log(bankDepositSum);

//2
// const numDeposits100 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

//another way
// const numDeposits100 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((preV, currV) => (currV >= 1000 ? preV + 1 : preV), 0);
//   .reduce((preV, currV) => (currV >= 1000 ? ++preV : preV), 0);
// console.log(accounts.flatMap(acc => acc.movements));
// console.log(numDeposits100);

//  prefixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);

//3

// const { deposit, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, currV) => {
//       // currV > 0 ? (sum.deposit += currV) : (sum.withdrawal += currV);
//       sum[currV > 0 ? 'deposit' : 'withdrawal'] += currV;
//       return sum;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );
// console.log(deposit + ', ' + withdrawal);

//4
// const converTitleCase = function (title) {
//   const exception = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exception.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };

// console.log(converTitleCase('this is a nice title'));
// console.log(converTitleCase('this is a LONG title but not too long'));
// console.log(converTitleCase('and here is another title with an EXAMPLE'));

//.........................coding challenge......................

// const checkDogs = function (dogsJulia, dogsKate) {
//   const shallowCopyJuliaD = dogsJulia.slice();
//   const juliaRealDogs = shallowCopyJuliaD.slice(1, -2);
//   const newDogsArr = juliaRealDogs.concat(dogsKate);
//   console.log(newDogsArr);
//   newDogsArr.forEach(function (v, i) {
//     const text =
//       v < 3
//         ? `Dogs number ${i + 1} is still a puppy`
//         : `Dogs number ${i + 1} is an adult, and ${v} years old`;
//     console.log(text);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log(`$$$$$$$$$$$$$$$$$$$$$$$$$$`);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//.....................................coding challenge............................................

// const calcAverageHumanAge = function (ages) {
//   let dogAgeArr = [];
//   let humanAge;
//   ages.forEach(function (v) {
//     if (v <= 2) {
//       humanAge = 2 * v;
//     } else {
//       humanAge = 16 + v * 4;
//       dogAgeArr.push(humanAge);
//     }
//   });
//   const avg = dogAgeArr.reduce((acc, v) => acc + v, 0) / dogAgeArr.length;
//   console.log(avg);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(`ka me ha me ha`);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//another way

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(v => (v <= 2 ? 2 * v : 16 + v * 4));
//   const adult = humanAge.filter(v => v >= 18);
//   console.log(humanAge);
//   console.log(adult);
//   // const avgAge = adult.reduce((acc, v) => acc + v, 0) / adult.length;

//   const avgAge = adult.reduce((acc, v, i, arr) => acc + v / arr.length, 0);
//   return avgAge;
// };

// const p = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(`ka me ha me ha`);
// const q = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(p, q);

//.....................................coding challenge............................................

// const calcAverageHumanAge = ages =>
//   ages
//     .map(v => (v <= 2 ? 2 * v : 16 + v * 4))
//     .filter(v => v >= 18)
//     .reduce((acc, v, i, arr) => acc + v / arr.length, 0);

// const p = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const q = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(p, q);

//.....................................coding challenge............................................

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

//1

// dogs.forEach(v => (v.recommendedFood = Math.trunc(v.weight ** 0.75 * 28)));

//2

// const sarahDog = dogs.find(v => v.owners.includes('Sarah'));
// console.log(
//   `Sarah's dog is eating too ${
//     sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
//   }.`
// );

//3

// const eatingTooMuch = dogs
//   .filter(v => v.curFood > v.recommendedFood)
//   .map(v => v.owners)
//   .flat();
// const eatingTooLittle = dogs
//   .filter(v => v.curFood < v.recommendedFood)
//   .flatMap(v => v.owners);

// console.log(eatingTooMuch);
// console.log(eatingTooLittle);

//4

// console.log(`${eatingTooMuch.join(' and ')}'s dogs are eating too much.`);
// console.log(`${eatingTooLittle.join(' and ')}'s dogs are eating too little.`);

//5

// console.log(dogs.some(v => v.curFood === v.recommendedFood));

//6

// const eatingOkAmount = v =>
//   v.curFood > v.recommendedFood * 0.9 && v.curFood < v.recommendedFood * 1.1;
// console.log(dogs.some(eatingOkAmount));

//7

// console.log(dogs.filter(eatingOkAmount));

//8

// const dogRecFoodSorted = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogRecFoodSorted);

//....................PRACTICE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// const displayMovements = function (movements) {
//   containerMovements.innerHTML = '';

//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//     <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}</div>
//     </div>
//   `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
// displayMovements(account1.movements);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////


