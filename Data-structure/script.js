'use strict';


// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex, time = 20, address }) {
//     console.log(
//       `At ${time} on ${address}, you will get ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}.`
//     );
//   },
//   ES6 enhanced object literel
//   openingHours,

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
//   },

//   orderPizza(mainIng, secondIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(secondIng);
//     console.log(otherIng);
//   },
// };

//working with String part 3.

// console.log('i+am+a+string'.split('+'));
// console.log('jonas scth'.split(' '));
// const [first_name, last_name] = 'jonas ferguson'.split(' ');
// console.log(first_name, last_name);
// const newName = ['Mr.', first_name, last_name.toUpperCase()].join(' ');
// console.log(newName);

// const capitalize_name = function (name) {
//   const names = name.split(' ');
//   console.log(names);
//   let x = [];
//   for (const n of names) {
// x.push(n[0].toUpperCase() + n.slice(1));
//     x.push(n.replace(n[0], n[0].toUpperCase())); //another easy-way to solve
//   }
//   console.log(x);
//   console.log(x.join(' '));
// };
// capitalize_name('jonas ann larry masiie');
// capitalize_name('konas anny karry lasiie');

// const massage = 'hi, jonas';
// console.log(massage.padStart(12, '#'));
// console.log(massage.padEnd(12, '#'));
// console.log('developer'.padStart(10, '+').padEnd(11, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const lastNum = str.slice(-4);
//   console.log(lastNum.padStart(str.length, '*'));
// };
// maskCreditCard(901367);
// maskCreditCard('758902892390');
// maskCreditCard('0832375890289532');
// const msg = 'Bad weather.....All departure delayed.......... ';
// console.log(msg.repeat(5));

// const waiting_plane = function (n) {
//   console.log(`There are ${n} plane${'🛫'.repeat(n)} waitiing. `);
// };
// waiting_plane(5);
// waiting_plane(10);
// waiting_plane(15);

//....................working with String part 2.

// const passenger = 'jONas';
// const passenger_to_lower = passenger.toLowerCase();
// const correct_name =
//   passenger_to_lower[0].toUpperCase() + passenger_to_lower.slice(1);
// console.log(correct_name);

// const email = 'jonas@hello.io';
// const login_email = ' Jonas@Hello.Io \n ';
// console.log(login_email.trimEnd());

// const login_email_tolower = login_email.toLowerCase();
// console.log(login_email_tolower);
// const login_email_rmvsp = login_email_tolower.trim();
// console.log(login_email_rmvsp);

//cool way.
// console.log(login_email.toLowerCase().trim());

// const priceDoller = '2.000.000$';
// const priceTK = priceDoller.replace('$', '৳').replaceAll('.', ',');
// console.log(priceTK);

// const msg = 'All Passenger comes to bording door 21. bording door 23!';
// console.log(msg.replaceAll('door', 'gate'));
// console.log(msg.replace(/door/g,'gate'));

// const plane = 'A32neo';
// console.log(plane.includes('neo'));
// console.log(plane.includes(38));
// console.log(plane.startsWith('A32'));
// console.log(plane.startsWith('neo'));
// console.log(plane.endsWith('neo'));
// console.log(plane.endsWith('A32'));

// if (plane.startsWith('A32') && plane.endsWith('neo'))
//   console.log('this is right plane');

// const checkBaggage = function (item) {
//   const baggage = item.toLowerCase();
//   if (baggage.includes('gun') || baggage.includes('knife')) {
//     console.log('you are not allowed on board');
//   } else {
//     console.log('you can abroad');
//   }
// };
// checkBaggage('i have a big clock and have Gun inside it');
// checkBaggage('i have a laptop and camera');
// checkBaggage('i have an apple and Knife');

//.............................working with String part 1.

// const airplane = 'Tap Air Portugal';
// const plane = 'A320';

// console.log('Bou269'[0]);
// console.log(airplane.length);
// console.log('Wuh v62'.length);

// console.log(airplane.indexOf('A'));
// console.log(airplane.indexOf(' '));
// console.log(airplane.lastIndexOf('gal'));
// console.log(airplane.lastIndexOf(' '));

// const word = 'carrot';
// console.log(word.lastIndexOf('r'));
// console.log(word.lastIndexOf('rr'));

// console.log(airplane.slice(4)); //it will show from index 4.
// console.log(airplane.slice(0, 5)); //it will show from 0 index to 4 ,means show everything before index 5.
// console.log(airplane.slice(0, 3).length);
// console.log(airplane.slice(airplane.indexOf(' ') + 1));
// console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));
// console.log(airplane.slice(-8));
// console.log(airplane.slice(0, -9));

// const airplaneSeat = function (x) {
//   const seat = x.slice(-1);
//   if (seat === 'B' || seat === 'E') {
//     console.log('you got middle seat');
//   } else console.log('you got lucky');
// };
// airplaneSeat('ERT1B');
// airplaneSeat('YH5C');
// airplaneSeat('BT44E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

//........................................PRACTICE

// const str = 'eleq';
// console.log(str.slice(1, -1));

// const task = ['code', 'eat', 'code'];
// console.log(task);
// console.log(...task);

// const tas_k = new Set(['code', 'eat', 'code']);
// console.log(tas_k);
// console.log([tas_k]);
// console.log([...tas_k]);
// console.log(tas_k.has('code'));
// tas_k.delete('eat');
// console.log(tas_k);
// tas_k.clear();
// console.log(tas_k);

// const ta_sk = { task: 'code', date: 'today', repeat: true };
// console.log(ta_sk);
// console.log([ta_sk]);
// console.log(...[ta_sk]);
// console.log(Object.keys(ta_sk));
// console.log(Object.values(ta_sk));
// const object_to_array = Object.entries(ta_sk);
// console.log(object_to_array);
// console.log(...object_to_array);
// const object_to_map = new Map(Object.entries(ta_sk));
// console.log(object_to_map);
// console.log(...object_to_map);

// const t_ask = new Map([
//   ['task', 'code'],
//   ['date', 'today'],
//   ['repeat', true],
// ]);
// console.log(t_ask);
// console.log([t_ask]);
// console.log([...t_ask]);
// console.log(t_ask.keys());
// console.log(...t_ask.keys());
// console.log(t_ask.values());
// console.log(...t_ask.values());
// console.log(t_ask.get('task'));
// for (const x of t_ask) console.log(x);
// console.log(Object.fromEntries(t_ask)); //map to object

//..............................map iteration

// const question = new Map([
//   ['question:', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['answer', 3],
//   [true, 'you are correct 🎉'],
//   [false, 'you are wrong 🤦‍♂️'],
// ]);

// console.log(question);
// console.log(Object.entries(question));
// console.log(Object.entries(openingHours));

//convert object to map.
// const hours = new Map(Object.entries(openingHours));
// console.log(hours);

//quize
// console.log(question.get('question:'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer${key} : ${value}`);
// }
// const ans = parseInt(prompt('your answer is?'));
// console.log(
//   ans === question.get('answer') ? question.get(true) : question.get(false)
// );

//convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//...............Map fundamental

// const rest = new Map();
// rest.set('name', 'Cappachino');
// rest.set(1, 'London');
// rest.set(2, 'Sweden');
// console.log(rest);
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');
// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get('categories'));
// console.log(rest.get(1));

// const time = 20;
// console.log(time > rest.get('open') && time < rest.get('close'));
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// rest.delete(1);
// console.log(rest);

// console.log(rest.size);
// rest.clear();
// console.log(rest);

// const arr = [1, 2];
// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));

//.........................Sets
// const orderSet = new Set(['pizza', 'pasta', 'pizza', 'pasta', 'rosito']);
// console.log(orderSet);
// console.log(new Set('shahed'));
// console.log(orderSet.size);
// console.log(orderSet.has('bread'));
// console.log(orderSet.has('pizza'));
// console.log(orderSet.add('Garlic'));
// console.log(orderSet.add('Garlic'));
// console.log(orderSet);
// orderSet.delete('pasta');
// console.log(orderSet);
// orderSet.clear(); //it will clear the set and show empty set.
// console.log(orderSet);
// for (const item of orderSet) console.log(item);

// const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('kakashi').size);

// console.log(new Set('jonas'));

//property names.
// const properties = Object.keys(openingHours);
// console.log(properties);
// let str = `we are open for ${properties.length} days: `;
// for (const day of properties) {
//   str += `${day}, `;
// }
// console.log(str);

//property values.
// const values = Object.values(openingHours);
// console.log(values);

//entries object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [i, { open: a, close: b }] of entries) {
//   console.log(`on ${i} we open at ${a} and close at ${b}`);
// }

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours && restaurant.openingHours.fri)
//   console.log(restaurant.openingHours.fri.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
//...........optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours.fri?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}: we open at ${open}`);
// }
//............optional chaining in method.
// console.log(restaurant.order?.(2, 0) ?? 'method does not exist');
// console.log(restaurant.Rosito?.(2, 0) ?? 'method does not exist');
//............optional chaining in arrays.
// const user = [{ name: 'jonas', email: 'jonas@2.io' }];
// console.log(user[0]?.email ?? 'array empty');
// const userr = [];
// if(userr.length > 0){
//   console.log(userr.name);
// }else console.log('array empty');
//............coolway.
// console.log(userr[0]?.email ?? 'array empty');

//.....................for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (const items of menu) console.log(items);
// for (const items of menu) console.log(`${items[0]}`);
// for (const items of menu.entries()) console.log(`${items[0] + 1}: ${items[1]}`);
//.....coolway
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// console.log([...menu.entries()]);

// const rest1 = {
//   name: 'Caprri',
// numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Gustavo',
// };

//.........OR assingment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//..........nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//...........&& assignment operator
// rest1.owner = rest1.owner && '<anonymous';
// rest2.owner = rest2.owner && "<anonymous";
// rest1.owner &&= '<anonymous';
// rest2.owner &&= '<anonymous';

// console.log(rest1);
// console.log(rest2);

//Nullish operator(null , undefined are falsy) and 0,'' truthy.

// restaurant.numGuests = 0;
// const guest2 = restaurant.numGuests ?? 10;
// console.log(guest2);

//...............||....................
// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null);
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

//..............&&..................
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');
// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mashrooms', 'b');
// }
// restaurant.orderPizza && restaurant.orderPizza('kitkat', 'dairy-milk');

//........................................Rest pattern.......................................

//const arr = [1, 2, ...[3, 4, 5]];//spread, because right side of equal.

// const [a, b, ...other] = [1, 2, 3, 4, 5, 99];//Rest, because left side of equal.
// console.log(a, b, other);

// const [a, , b, ...otherFood] = [
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(a, b, otherFood);

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);
// const { sat: s, fri: f, ...otherDays } = restaurant.openingHours;
// console.log(s, f, otherDays);

// const add = function (...number) {
//   console.log(number);
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   console.log(sum);
// };
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4, 5);
// const x = [10, 20, 20];
// add(...x);
// restaurant.orderPizza('chesse', 'mashroom', 'onion', 'bread');
// restaurant.orderPizza('sweet');

// ................................spred operator...............................

//............spread in objects ES6..2018
// const newRestuarant = {
//   found: 1999,
//   ...restaurant,
//   founder: 'PING_PONG',
// };
// console.log(newRestuarant);

// let restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'REsto Rima LOu';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

//............real-world example
// const ingredient = [
//   prompt('your ing1?'),
//   prompt('your ing2?'),
//   prompt('your ing3?'),
// ];
// console.log(ingredient);
// restaurant.orderPasta(...ingredient);

// let arr = [1, 2, 3];
// let newArr = [7, 8, ...arr];
// console.log(newArr);
// console.log(...newArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(...newMenu);

//........copy
// const maniMenuCopy = [...newMenu];
// console.log(maniMenuCopy);

//.........join 2 or more arrays.
// const menu = [...restaurant.starterMenu, ...maniMenuCopy];
// console.log(menu);

//..................destructuring objects.....................

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del sole,21',
//   mainIndex: 1,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//.........mutating variables
// let a = 111;
// let b = 222;
// console.log(a, b);
// const obj = { a: 1, b: 2, c: 3 };
// ({ a, b } = obj);
// console.log(a, b);

//.............nested Objects
// const {
//   fri: { open: o, close: c },
//   sat: saturday,
// } = restaurant.openingHours;
// console.log(o, c, saturday);

// ..................destructuring arrays.....................

// const arr = [2, 3, 4];
// const [name, openingHours, categories] = arr;
// console.log(name, openingHours, categories);
// console.log(arr);

// const [, , , y] = restaurant.categories;
// console.log(y);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
//.........switching variables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
//.........coolway
// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// console.log(restaurant.order(2, 0));
// const [starterItem, mainItem] = restaurant.order(2, 0);
// console.log(starterItem, mainItem);

//...............nested destructuring
// let nestedArr = [2, 4, [5, 6]];
// let [a, , [j, k]] = nestedArr;
// console.log(a, j, k);

//..............Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

//.....................................coding challange.................................

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1

// const [players1, players2] = game.players;
// console.log(players1, players2);

//2

// const [gk, ...fieldPlayers] = players1;
// const [gk, ...fieldPlayers] = players2;
// console.log(gk, fieldPlayers);

//3

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

//6

// const printGoals = function (...players) {
// console.log(players);
//   console.log(`${players.length} goals were scored.`);
// };
// printGoals('Davis', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

//7
// team1 < team2 && console.log('team1 will win');

// .....................................coding challange.................................

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
// [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//1

// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }

//2
// const avg = Object.values(game.odds);
// console.log(avg);
// let sum = 0;
// for (const x of avg) {
//   sum += x;
// }
// sum /= avg.length;
// console.log(sum);

//3
// for (const [key, value] of Object.entries(game.odds)) {
// console.log(key,value);
//   const str = key === 'x' ? 'draw' : `victory ${game[key]}`;
//   console.log(`odd of ${str}: ${value}`);
// }

//4

// const scorers = {};
// for (const player of game.scored) {
//   // console.log(scorers[player]);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//another way.

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player]++ || (scorers[player] = 1);
// }
// console.log(scorers);

//another normal way

// const scorers = {};
// for (const player of game.scored){
//   if(scorers[player]){
//     scorers[player]++
//   }else{
//     scorers[player] = 1;
//   }
// };
// console.log(scorers);

//.......................coding challenge...................

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

//1

// const events = [...new Set(gameEvents.values())];
// console.log(events);

//2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// //just fun way
// const time = [...gameEvents.keys()].pop();
// // console.log(time);
// for (const [key, value] of gameEvents) {
//   let str = '';
//   str += `An ${value} happended, on average, every ${
//     time / gameEvents.size
//   } minutes`;
//   console.log(str);
// }

// //3 original solution.

// console.log(
//   `An event happended, on average, every ${time / gameEvents.size} minutes`
// );

// //4

// for (const [x, y] of gameEvents) {
//   if (x < 47) {
//     console.log(`[First Half] ${x}: ${y}`);
//   } else {
//     console.log(`[Second Half] ${x}: ${y}`);
//   }
// }
// console.log('............');

// //cool way
// for (const [x, y] of gameEvents) {
//   const half = x <= 45 ? 'Firt Half' : 'Second Half';
//   console.log(`[${half}] ${x}: ${y}`);
// }

//....................coding challenge............................

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
//   }
// });

// const program = [
//   'underscore_case',
//   'first_name',
//   'Some_Variable',
//   'calculate_Age',
//   'delayed_departure',
// ];
// for (const [i, item] of program.entries()) {
// console.log(item);
//   const [first, second] = item.toLowerCase().split('_');
// console.log(first, second);
//   const output = `${first}${second.replace(
//     second[0],
//     second[0].toUpperCase()
//   )}`;
//   console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
// }

//.........string method_____praCtice;

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
//     ':',
//     'h'
//   )})`.padStart(46);
//   console.log(output);
// }

//..............PRACTICE
// const first = () => {
//   let a = 2;
//   const b = second(5, 5);
//   a = a + b;
//   return a;
// };
// function second(x, y) {
//   var c = 100;
//   return c;
// }
// console.log(first());

// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[2]]: {
//     open: 0,
//     close: 21,
//   },
//    [`day${2 + 0}`]: {
//      open: 0, // Open 24 hours
//      close: 2 + 14,
//    },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({
//     starterIndex = 2,
//     mainIndex = 2,
//     time = '11:43',
//     address = 'Via je ate',
//   }) {
//     console.log(
//       `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]},will be deliver to  ${address} at ${time}`
//     );
//   },
  // orderDelivery({ starterIndex = 1, mainIndex, time = 20, address }) {
  //   console.log(
  //     `At ${time} on ${address}, you will get ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}.`
  //   );
  // },
  // ES6 enhanced object literel
  //   openingHours,

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
//   },

//   orderPizza(mainIng, secondIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(secondIng);
//     console.log(otherIng);
//   },
// };

// console.log('i#am#a#string'.split('#'));
// console.log('javaScript java'.split(' '));
// const [lang1, lang2] = 'javaScript java'.split(' ');
// console.log(lang1, lang2);
// const word = ['python', lang1, lang2].join(' ');
// console.log(word);

// const capitalize_name = function (name) {
//   const names = name.toLowerCase().split(' ');
//   const arr = [];
//   for (let item of names) {
//     arr.push(item.replaceAll(item[0], item[0].toUpperCase()));
//   }
//   console.log(arr);
// };
// capitalize_name('jonas aNn laRRy masiie');
// capitalize_name('koNAs anny kARRy lasiie');
// const msg = 'hi, javascript';
// console.log(msg.length);
// console.log(msg.padStart(15, '$'));
// console.log(msg.padEnd(15, '$'));
// console.log('Dev'.padStart(5, '$').padEnd(7, '$'));
// console.log('123456789'.slice(-4));
// const card = num => {
//   const str = num + '';
//   const CreditCard = str.slice(-4).padStart(15, '*');
//   console.log(CreditCard);
// };
// card(23456);
// card(8976528856);
// card(236134568904332);
// console.log(123);
// console.log(123 + '');

// const msg = 'Bad weather.....All departure delayed.......... ';
// console.log(msg.repeat(3));
// const plane = n => {
//   console.log(`There are ${n} plane${'🛫'.repeat(n)}`);
// };
// plane(5);
// plane(10);
// plane(15);

// console.log(new String('ngan').slice(1));
// console.log(typeof new String('ngan'));
// console.log(new String('ngan'));
// console.log(typeof 'dao');


// Data needed for first part of the section
/*
const weekdays = ['mon','tues','wed','thu','fri','sat','sun'];

let openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
 [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[4+1]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto','Burger'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours,

  orderDelivery({starterIndex = 2, mainIndex = 1,time = '9:09',address = 'Parisa'}) {
    console.log(`order recieved for ${address} at ${time} and food is ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}.`);
  },

  orderPasta(ing1,ing2,ing3) {
    console.log(`here's your pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  }
};
*/
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const getCode = str => str.slice(0,3).toUpperCase();

// const flights_parts = flights.split('+');
// // console.log(flights_parts);
// for(let flight of flights_parts){
//   // console.log(flight);
//   const [type,from,to,time] = flight.split(';');
//   // console.log(type,from,to,time);
//   const output = `${type.startsWith('_Delayed') ? '🔴': ''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(44);
//   console.log(output);
// };


// console.log(0+[0]);
// console.log(0+[1]);
// console.log(0+[1]+[2]);

const weekdays = ['mon','tues','wed','thu','fri','sat','sun'];

let openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
 [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[4+1]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto','Burger'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },


  orderDelivery({starterIndex=1, mainIndex=1,time = '9:09',address = 'Parisa'}) {
    console.log(`order recieved for ${address} at ${time} and food is ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}.`);
  },

  orderPasta(ing1,ing2,ing3) {
    console.log(`here's your pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  }
};




