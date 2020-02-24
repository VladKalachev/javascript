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

const sentence = 'Lorem ipsom doler sit, amet consectetur';

const wordList = R.split(' ', sentence);

// console.log(wordList);

const wordCount = R.length(R.split(' ', sentence));

// console.log(wordCount);

const countWords = R.compose(R.length, R.split);

// console.log(countWords(' ', sentence));

const countWords2 = R.compose(R.length, R.split(' '));

// console.log(countWords2(sentence));

const countWords3 = R.pipe(R.split(' '), R.length);

// console.log(countWords3(sentence));

