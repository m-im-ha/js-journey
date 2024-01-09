import'core-js/actual';
// Importing module
// import {addToCart,totalPrice as tp,tE} from './shoppingCart.js'
// addToCart(5,'juice');
// console.log(tp,tE);
// import * as ShoppingCart from './shoppingCart.js'
// console.log('importing module');
// ShoppingCart.addToCart(5,'juice');
// console.log(ShoppingCart.totalPrice,ShoppingCart.tE);

// import identity from './shoppingCart.js';
// identity('uta');

import { addToCart,cart } from './shoppingCart.js';
addToCart(9,'pizza');
addToCart(3,'burger');
addToCart(1,'coca-cola');
console.log(cart);
console.log(`import module`);

// console.log(`super`);
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log(`yohoho`);

// import * as ShoppingCart from './shoppingCart.js';
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);
//   return {title : data.at(-1).title, text:data.at(-1).body}
// };
// const getpost = getLastPost().then(x=>console.log(x));
// console.log(getpost);
// const getPost = await getLastPost();
// console.log(getPost);

/*
const ShoppingCart2 = (function(){
  const cart = [];
  const totalPrice = 489;
  const shippingCost = 25;
  const totalQuantity = 12;

  const addToCart = function(num,element){
    cart.push({num,element});
    console.log(`you bought ${num} ${element} and shipping-cost is $${shippingCost}.`);
  };

  const orderStock = function(num,element){
    console.log(`you ordered ${num} ${element} from supplier.`);
  };

  return {
    cart,
    shippingCost,
    totalPrice,
    totalQuantity,
    addToCart
  };
})();
ShoppingCart2.addToCart(5,'burger');
ShoppingCart2.addToCart(7,'apples');
console.log(ShoppingCart2.cart);
console.log(ShoppingCart2);)*/

// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    {product:'bread',quantity:5},
    {product:'pizza',quantity:2},
  ],
  user : {loggedIn:true},
}

const stateClone = Object.assign({},state);
const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateCloneDeep);
console.log(`development`);

if(module.hot){
  module.hot.accept();
}

class Person {
  greeting = `hey`;
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');
console.log('luffy' ?? null);
console.log(state.cart.find(x=>x.quantity>=2));
Promise.resolve('test').then(x=>console.log(x));

import 'regenerator-runtime/runtime';
console.log(`yohoho`);
