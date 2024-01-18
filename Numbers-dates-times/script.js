'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale
/*
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-01-18T21:31:17.178Z',
    '2023-01-23T07:42:02.383Z',
    '2023-02-18T09:15:04.904Z',
    '2023-03-21T10:17:24.185Z',
    '2023-03-28T14:11:59.604Z',
    '2023-03-30T00:01:17.194Z',
    '2023-04-01T03:00:00.929Z',
    '2023-04-02T23:20:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-02-27T14:43:26.374Z',
    '2023-03-01T18:49:59.371Z',
    '2023-03-03T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
       <div class="movements__date">${displayDate}</div>
       <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // con.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 sec, stop timer and log out user.
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log Into Get Started';
      containerApp.style.opacity = 0;
    }

    // decrease 1s
    time--;
  };
  //set time to 5 mins
  let time = 15;

  // call the timer every secs
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers

let currentAccount, timer;

//FAKE ALWAYS LOGGED IN

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // con.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hr = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hr}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // add loan date

      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // con.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});*/

/*const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [
    [200, '2019-11-18T21:31:17.178Z'],
    [455.23, '2019-12-23T07:42:02.383Z'],
    [-306.5, '2020-01-28T09:15:04.904Z'],
    [25000, '2020-04-01T10:17:24.185Z'],
    [-642.21, '2020-05-08T14:11:59.604Z'],
    [-133.9, '2020-05-27T17:01:17.194Z'],
    [79.97, '2020-07-11T23:36:17.929Z'],
    [1300, '2020-07-12T10:51:36.790Z'],
  ],
  interestRate: 1.2, // %
  pin: 1111,
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [
    [5000, '2019-11-01T13:15:33.035Z'],
    [3400, '2019-11-30T09:48:16.867Z'],
    [-150, '2019-12-25T06:04:23.907Z'],
    [-790, '2020-01-25T14:18:46.235Z'],
    [-3210, '2020-02-05T16:33:06.386Z'],
    [-1000, '2020-04-10T14:43:26.374Z'],
    [8500, '2020-06-25T18:49:59.371Z'],
    [-30, '2020-07-26T12:01:20.894Z'],
  ],
  interestRate: 1.5,
  pin: 2222,
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Functions

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  let movements = acc.movements;

  const moves = sort
    ? movements.slice().sort((a, b) => a[0] - b[0])
    : movements;

  moves.forEach(function (mov, i) {
    const type = mov[0] > 0 ? 'deposit' : 'withdrawal';
    let date = new Date(`${mov[1]}`);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const year = date.getFullYear();
    const displayDate = `${day} / ${month} / ${year}`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${mov[0].toFixed(2)}€</div>
    </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov[0], 0);

  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov[0] > 0)
    .reduce((acc, mov) => acc + mov[0], 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov[0] < 0)
    .reduce((acc, mov) => acc + mov[0], 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov[0] > 0)
    .map(deposit => (deposit[0] * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// fake login
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = '1';

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const day = `${now.getDay()}`.padStart(2, '0');
    const month = `${now.getMonth() + 1}`.padStart(2, '0');
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, '0');
    const min = `${now.getMinutes()}`.padStart(2, '0');

    labelDate.textContent = `${day} / ${month} / ${year}, ${hour}:${min}`;

    // Clear input fields

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push([-amount, new Date().toISOString()]);
    receiverAcc.movements.push([amount, new Date().toISOString()]);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(mov => mov[0] >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push([amount, new Date().toISOString()]);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = '0';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// base 10 => 0 to 9
// binary base => 0 1

// console.log(0.1 + 0.2); //0.30000000000000004

// console.log(+(0.1 + 0.2).toFixed(2));
// console.log(0.1 + 0.2 !== 0.3);
// console.log(+(0.22 + 0.7).toFixed(1));
// console.log(+(0.1 + 0.2).toFixed(1) === 0.3);

//conversion

// console.log(Number('23'));
// console.log(+'23'); //when JavaScript sees the plus operator, it will do type coercion. So it will automatically convert all the operands to numbers.
// Remember every function is also an object.

// parsing

// console.log(parseInt('23px', 10));
// console.log(parseInt('px23', 10));
// console.log(Number.parseInt('23px', 10));

//float

// console.log(Number.parseInt(' 2.5rem '));
// console.log(Number.parseFloat(' 2.5rem '));

//NaN

// console.log(Number.isNaN('23'));
// console.log(Number.isNaN(23));
// console.log(Number.isNaN(+'23X'));
// console.log(Number.isNaN(23 / 0));
// console.log('--------------------');

//isFinite   ==>  its the best way to check if a value is a number .

// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(23));
// console.log(Number.isFinite(+'23X'));
// console.log(Number.isFinite(23 / 0));

//...............isInteger
// console.log(Number.isInteger('23'));
// console.log(Number.isInteger(23));
// console.log(Number.isInteger(+'23X'));
// console.log(Number.isInteger(23 / 0));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 7, 23, 9));
// And this max function here actually does type coercion.
// console.log(Math.max(5, 7, '23', 9));
// console.log(Math.max(5, 7, '23p', 9));

// console.log(Math.min('5', 7, 23, 9));
// console.log(Math.min(5, 7, '23', 9));
// console.log(Math.min(5, 7, '23p', 9));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

//getting a number between 2 numbers.

// const randomInt = (min, max) => Math.round(Math.random() * (max - min)) + min;
// console.log(randomInt(5, 10));

//rounding integers

// console.log(Math.trunc(23.53));
// console.log(Math.trunc(23.43));
// console.log(Math.trunc(23.93));
// console.log(Math.trunc(-23.3));

// console.log('----round-------');
// console.log(Math.round(23.4));
// console.log(Math.round(23.5));
// console.log(Math.round(23.9));
// console.log(Math.round(-23.5));
// console.log(Math.round(-23.6));

// console.log('----ceil-----');
// console.log(Math.ceil(23.3));
// console.log(Math.ceil(23.5));
// console.log(Math.ceil(23.9));
// console.log(Math.ceil(-23.4));
// console.log(Math.ceil(-23.9));

// console.log('-----floor-----');
// console.log(Math.floor(23.3));
// console.log(Math.floor(23.5));
// console.log(Math.floor(23.9));
// console.log(Math.floor(-23.3));

//rounding decimals
// So toFixed will always return a string and not a number.And that's important to keep in mind.

// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.789).toFixed(2));
// console.log(+(2.789).toFixed(2));

// const isEven = n => n % 2 === 0;
// console.log(isEven(4));
// console.log(isEven(13));
// console.log(isEven(22));

//....another way
// function isEven(num){
//   const evenNum = Array.from({length:num},(_,i)=>2*i);
//   console.log(evenNum);
//   if(evenNum.includes(num)) return true;
//   else return false;
// }
// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(4));
// console.log(isEven(5));

// So whenever you need to do something every Nth time,then it is a good idea to use the remainder operator for that.So here for example, every second time, every third time...

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';

//     if (i % 3 === 0) row.style.backgroundColor = 'skyblue';
//   });
// });

//287,560,000,000
// const diameter = 239_789_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1, transferFee2);

// const PI = 3.1_416;
// console.log(PI);

// console.log(Number('234_999'));
// console.log(parseInt('234_999'));
// console.log(+'234_999');
// console.log(parseInt('234_999'));

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 0);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);

// console.log(7485932620852798390738291n);
// console.log(BigInt(7485932));

// operations
// console.log(10000n + 10000n);
// console.log(35689265432906536894269851109n * 100000000000n);
// console.log(Math.sqrt(16n));

// const huge = 29469376201638930n; //if you don't write n, it will be a regular number which has less precision when you have big values
// const num = 11;
// console.log(huge * BigInt(num));

//Exception
// console.log(20n > 15);
// console.log(20n === 20); //doesn't do type coersion.
// console.log(typeof 20n);
// console.log(huge + ' is really BIG');

//division
// console.log(12n / 3n);
// console.log(12 / 3);

//-------------create date

// const date = new Date();
// console.log(date);

// console.log(new Date('Apr 01 2023 15:16:17'));
// console.log(new Date('Dec 28,2023'));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date('Nov 19,2024'));
// console.log(new Date(2024, 0, 19, 10, 11, 11)); //0--Jan,1--Feb....11--Dec.
// console.log(new Date(2024, 10, 33)); //js autocorrect right to the next day.
//console.log(new Date(2023, 12, 32));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2023, 5, 1, 18, 12, 12);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.getMilliseconds());
// console.log(future.toDateString());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(1685621532000));
// console.log(Date.date());
// future.setFullYear(2024);
// console.log(future);

// const future = new Date(2023, 5, 1, 18, 12, 12);
// console.log(future);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days = calcDaysPassed(new Date(2023, 3, 2), new Date(2023, 3, 4));
// console.log(days);

// const num = 3884764.23;

// const options = {
//   style: 'currency',
//   unit: 'mile-per-hour',
//   currency: 'USD',
// };

// console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
// console.log(
//   'Bangladesh: ',
//   new Intl.NumberFormat('bn-BD', options).format(num)
// );

const ingredients = ['ricotta', 'monterey'];
//          setTimeout

// setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}.`),
//   3000,
//   'tomato',
//   'cheese'
// );
// const pizzaTimer = setTimeout(
//   (ing1, ing2) =>
//     console.log(`Here is your another pizza 🍕 with ${ing1} and ${ing2}.`),
//   3000,
//   'ricotta',
//   'monterey'
// );
// if (ingredients.includes('ricotta')) clearTimeout(pizzaTimer);

//                setInterval

// setInterval(() => {
//   const time = new Date();
//   const hr = time.getHours();
//   const min = time.getMinutes();
//   const sec = time.getSeconds();
//   console.log(`${hr} : ${min} : ${sec}`);
// }, 1000);

//...................PRACTICE..............

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-01-18T21:31:17.178Z',
    '2023-01-23T07:42:02.383Z',
    '2023-02-18T09:15:04.904Z',
    '2023-03-21T10:17:24.185Z',
    '2023-03-28T14:11:59.604Z',
    '2023-03-30T00:01:17.194Z',
    '2023-04-01T03:00:00.929Z',
    '2023-04-02T23:20:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-02-27T14:43:26.374Z',
    '2023-03-01T18:49:59.371Z',
    '2023-03-03T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};


