'use strict';

// const Person = function(firstName, birthYear) {
  // Instance properties
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  //never do this
  // this.calcAge = function(){
  //   console.log(2037 - this.birthYear);
  // }
// }

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda,jack);

// const hong = 'cam';

// console.log(jonas instanceof Person);
// console.log(hong instanceof Person);

// Person.hey = function() {
//   console.log(`Hey there!`);
// }
// Person.hey();

// console.log(Person.prototype);
// Person.prototype.calcAge = function(){
//   console.log(2035 - this.birthYear);
// }
// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__ === Person.prototype);
// console.log(jack.__proto__);
// console.log(matilda.__proto__);

// console.log(Person.prototype.isPrototypeOf(jack));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas);

// console.log(jonas.hasOwnProperty('birthYear'));
// console.log(jonas.hasOwnProperty('species'));
// console.log(jonas.hasOwnProperty('firstName'));

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const array = [1,2,5,2,4,9,4];
// console.log(array.__proto__);
// console.log(array.__proto__ === Array.prototype);

// console.log(array.__proto__.__proto__);

// Array.prototype.unique = function(){
//   return [...new Set(this)];
// };
// console.log(array.unique());
// const h1 = document.querySelector('h1');
// console.log(h1);
// console.dir(h1);
// console.dir(p=>p+2);

//....................Coding challenge #01

/*
const Car = function(make,speed){
  this.make = make;
  this.speed = speed;
}

const bmw = new Car('BMW',90);
const marcedes = new Car('Marcedes',150);
console.log(bmw);
console.log(marcedes);

Car.prototype.accelerate = function(){
  // console.log(this.speed + 10);
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
}
bmw.accelerate();
marcedes.accelerate();
Car.prototype.brake = function(){
  console.log(this);
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
}
bmw.brake();
marcedes.brake();

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

marcedes.accelerate();
marcedes.accelerate();

bmw.brake();
marcedes.brake();
*/

//.................................

// class expression
// const PersonCl = class{};

// class declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2027 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }
  
  get age() {
    return 2037 - this.birthYear;
  }

  //SEt a property that already exists.
  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else console.log(`not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log(`hey there`);
    console.log(this);
  }

}
*/

// PersonCl.hey();
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.fullName);
// const walter = new PersonCl('Walter', 1986);
// jessica.calcAge();
// console.log(jessica.age);
// jessica.fullName = 'James Wagner';
// console.log(jessica);

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//   console.log(`hey ${this.firstName}`);
// }
// jessica.greet();

// 1.Classes are not hoisted

// getter and setter

// const account = {
//   owner: 'Jonas',
//   movements: [200,530,120,300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// }
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1991);
// sarah.calcAge();


//....................Coding challenge #02
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }

  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speed) {
    return this.speed = speed * 1.6;
  }
}
const bmw = new Car('BMW',90);
const marcedes = new Car('Marcedes',150);
console.log(bmw);
console.log(marcedes);
bmw.accelerate();
bmw.brake();
marcedes.accelerate();
marcedes.brake();

console.log(bmw.speedUS);
console.log(bmw);
const ford = new Car('Ford', 100);
ford.speedUS = 50;
console.log(ford);
*/
//.................................

// const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function() {
//   console.log(2037 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// }

// Linking prototypes
// Student.prototype =Object.create(Person.prototype);

// Student.prototype.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const mike = new Student('Mike', 2020, 'CSE');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//....................Coding challenge #03
/*
const Car = function(make,speed){
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
}

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h.`);
}

const EV = function(make,speed,charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}


EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
  this.speed += 20;
  this.charge --;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.brake();
*/

//......................................
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // Method will be added to .prototype property
  calcAge() {
    console.log(2027 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }
  
  get age() {
    return 2037 - this.birthYear;
  }

  //SEt a property that already exists.
  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else console.log(`not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log(`hey there`);
    console.log(this);
  }

}
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old, but bla`);
  }

}
const martha = new StudentCl('Martha Jones', 2012, 'CSE');
martha.introduce();
martha.calcAge();
martha.calcAge();
*/

// Inheritanse between 'Classes': Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// }
// StudentProto.introduce = function() {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'CSE');
// jay.introduce();
// jay.calcAge();
/*
class Account {
  // 1) Public field
  locale = navigator.language;

  // 2) Private field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    
    // protect property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`thanks for opening an account,${this.owner}.`);

  }

  // 3) Public method
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  
  requestLoan(val) {
    if(this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  static helper() {
    console.log(`helper`);
  }

  // 4) Private methods
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(290);
acc1.withdraw(190);
acc1.requestLoan(1999);
// acc1.#approveLoan(1999);
console.log(acc1.getMovements());

console.log(acc1);
Account.helper();

//Chaining

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

*/

///////////////////////////////////
////////////////////////////////////////
/////////////////////////////////////////////
/*
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1993);
const matilda = new Person('Matilda', 1998);
const jack = new Person('Jack', 1987);

console.log(Person.prototype);
console.log(jonas, matilda, jack);
const jay = 'Jay';
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
}
jonas.calcAge();
matilda.calcAge();
jack.calcAge();
console.log(Person.prototype);
Person.prototype.species = 'Homo Sapiens';
console.log(jonas,matilda,jack);

const arr = [2,3,4,7,9,1,2,3,7];
Array.prototype.unique = function() {
  return [...new Set(this)];
}
console.log(arr.unique());
*/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this._fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else console.log(`OOPsss wrong.`);
  }
}
const jessica = new PersonCl('Jessica Devis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet();
const james = new PersonCl("Jack",1998);



const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },

  get fullName() {
    return this._fullName;
  }
}
console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah',1979);
console.log(sarah);
*/

/*
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My Name is ${this.firstName},born in ${this.birthYear}, student of ${this.course}`);
}

const mike = new Student('Mike', 2020, 'IT');
console.log(mike);
mike.introduce();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.__proto__);
// console.log(Student.prototype);
// console.log(Person.prototype);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

mike.calcAge();
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else console.log(`OOPsss wrong.`);
  }

  get fullName() {
    return this._fullName
  }

  static hey() {
    console.log(`hey there, Let's be friend!`);
  }


}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce(){
    console.log(`My Name is ${this.fullName},born in ${this.birthYear}, student of ${this.course}`);
  }

  calcAge(){
    console.log(`I'm ${2037 - this.birthYear} years old.bla bla`);
  }
}
const martha = new StudentCl('Martha Jonas', 2012, 'IT');
console.log(martha);
martha.introduce();
martha.calcAge();
*/

/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My Name is ${this.firstName},born in ${this.birthYear}, student of ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay',2000,'IT');
console.log(jay);
steven.init('Steven',1993);
console.log(steven);
steven.calcAge();
jay.calcAge();
jay.introduce();
*/

/*

class Account {

  locale = navigator.language;
  #movements =[];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  getMovements(){
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  
  requestLoan(val) {
    if(this._approveLoan(val)){
      this.deposit(val);
      console.log(`Loan Approved`);
      return this;
    }
  }

  _approveLoan(val) {
    return true;
  }

  static helper() {
    console.log(`HelPPPPPP`);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(111);
acc1.withdraw(2290);
acc1.requestLoan(2864);
console.log(acc1);
console.log(acc1.getMovements());
console.log(acc1._pin);
acc1.deposit(990);
acc1.withdraw(370);
console.log(acc1);
// acc1.#approveLoan(999);
Account.helper();
acc1.deposit(543).deposit(987).withdraw(1500).requestLoan(5500);
console.log(acc1.getMovements());
*/

/*
class CarCl {
  constructor(make,speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
  }

  brake(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h.`);
    return this;
  }
}

class EVCl extends CarCl {

  #charge;
  constructor(make,speed,charge){
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate(){
    this.speed += 20;
    this.#charge --;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const tesla = new EVCl('Tesla', 120, 23);
console.log(tesla);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// tesla.brake();

tesla.accelerate().accelerate().brake().brake().chargeBattery(100).brake().accelerate();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const Person = function(firstName, birthYear){
  // console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
}
const james = new Person('James',1991);
console.log(james);
const robin  =new Person('Robin', 1990);
const brook = new Person('Brook',1985);
console.log(robin);
console.log(brook);

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
}

james.calcAge();

Person.prototype.species = 'Homo Sapiens';

const arr = [1,2,3,4];
console.log(arr.__proto__);
*/

/*
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge(){
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`hey, ${this.firstName}`);
  }

  get age(){
    return 2037 - this.birthYear;
  }

  set firstName(name) {
    console.log(name);
    if(name.includes(' ')) return this._firstName = name;
    else alert(`${name} is not a fullname`);
  }

  get firstName() {
    return this._firstName;
  }

  static hey() {
    console.log(this);
    console.log(`hey, PersonCl`);
  }
}

const james = new PersonCl('james rr',1991);
console.log(james);
james.calcAge();
james.greet();
console.log(james.age);
PersonCl.hey();
// james.hey();
*/

/*
const account = {
  owner : 'Jermy',
  movements : [100,200,300,400,500],

  get element(){
    return this.movements.slice(-1).pop();
  },

  set element(mov) {
    return this.movements.push(mov);
  }
}

// account.pin = 111;
account['pass'] = 111;

console.log(account['owner']);

account.element = 999;
console.log(account.element);
*/

/*
const PersonProto = {
  calcAge () {
    console.log(2037 - this.birthYear);
  },

  init(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const marko = Object.create(PersonProto);
console.log(marko);
marko.firstName = 'Marko';
marko.birthYear = 1991;
marko.calcAge();

const otto = Object.create(PersonProto);
otto.birthYear = 1990;
otto.calcAge()
otto.init('Otto','Williams')
// otto.init();
console.log(otto);
*/

/*
class Person {
  constructor(firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }
}

class Student extends Person {
  constructor(firstName,birthYear,course) {
    super(firstName,birthYear);
    this.course = course;
  }

  introduce(){
    console.log(`hey, I'm ${this.firstName} , born in ${this.birthYear} , studying ${this.course}`);
  }

  calcAge(){
    console.log(`I'm ${2078 - this.birthYear} years old`);
  }
}



const kate = new Student('Kate',1999,'ML');
console.log(kate);
kate.introduce();
kate.calcAge();
*/

/*
const Person = function(f,b) {
  this.f = f;
  this.b = b;
}

Person.prototype.calcAge = function(){
  console.log(2090 - this.b);
}

const Student = function(f,b,c) {
  Person.call(this,f,b);
  this.c = c;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`hey, I'm ${this.f} , born in ${this.b} , studying ${this.c}`);
}

const kate = new Student('Kate',1999,'ML');
kate.introduce();
kate.calcAge();
Student.prototype.constructor = Student;
*/

// Student.prototype = 

// const cat = {
//   breed : 'Russian Blue',
// }

// const dog = {
//   age : 7,
// }

// Object.setPrototypeOf(cat,dog);

/*
const PersonProto = {
  calcAge(){
    console.log(2078 - this.birthYear);
  },

  init(firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const jeson = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
const kate = Object.create(StudentProto);

StudentProto.init = function(firstName,birthYear,course) {
  PersonProto.init.call(this,firstName,birthYear);
  this.course = course;
}

StudentProto.introduce = function() {
  console.log(`hey, ${this.firstName}!!!`);
}

kate.init('kate',1999,'ML');
kate.introduce();
kate.calcAge();
*/

class Account  {
  //Public Field
  locale = navigator.language;
  
  //Private Field
  #movements = [];
  #pin;

  constructor(owner,currency,pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  deposit(mov) {
    this.#movements.push(mov);
    return this;
  }

  withdrawal(mov) {
    this.deposit(-mov);
    return this;
  }

  #approval(mov){
    return true;
  }

  requestLoan(mov){
    if(this.#approval){
      this.deposit(mov);
      console.log(`request accepted`);
      return this;
    }
  }

  //Public Interface
  getMovements() {
    return this.#movements;
  }

  static helper() {
    console.log(`helper`);
  }
}

const ruby = new Account('Ruby','Dollar',111);
ruby.deposit(100);
ruby.withdrawal(200);
ruby.deposit(300);
ruby.requestLoan(9999);
// ruby.#approval(789);

console.log(ruby.getMovements());
// ruby.#pin;
// console.log(ruby.#approval(233));
// ruby.helper();
// Account.helper();
ruby.deposit(222).withdrawal(333).deposit(444).requestLoan(654);
console.log(ruby);
