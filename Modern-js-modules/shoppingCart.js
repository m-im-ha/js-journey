// Exporting module

console.log('exporting module');
const shippingCost = 10;
export const cart = [];

export const addToCart = function(num,element){
  cart.push({num,element});
  console.log(`you bought ${num} ${element}.`);
}

const totalPrice = 290;
const totalEl = 5;
export {totalPrice,totalEl as tE}

export default function(myName){
  console.log(`my name is ${myName}`);
}

// console.log(`start fetching user`);
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log(`finish fetching user`);