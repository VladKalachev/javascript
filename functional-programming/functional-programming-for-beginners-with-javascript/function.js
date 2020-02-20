/**
 * Currying
 */

// function greet(greeting, name) {
//     return `${greeting} ${name}`;
// }

// function greet(greeting) {
//     return function(name) {
//         return `${greeting} ${name}`;
//     };
// }

// console.log(greet('Good Morning', 'James'));
// console.log(greet('Good Morning')('James'));

const friends = ['Nate', 'Jim', 'Scott', 'Dean'];

// const friendGreeting = friends.map(name => greet('Good Morning', name));
// const friendGreeting = friends.map(greet('Good Morning'));

// console.log(friendGreeting)

/**
 * Partial Application
 * Using Function
 */
// const afternoonGreet = greet('Good Afternoon');

// const greetNate = afternoonGreet('Nate');

// console.log(greetNate);

/**
 * Currying ramda
 */

 const greet = R.curry((greeting, name) => `${greeting} ${name}`);
// console.log(greet('Good Morning')('James'));

/**
 * Pure Functions ( Чистые функции )
 * Процедура = грязная функция
 */

 function add(x, y) {
    return x + y;
 }

 const add2 = (x, y) => x + y;

 let counter = 0;

 function increment() {
     counter++;
 }

 /**
  * Function Composition
  */
 