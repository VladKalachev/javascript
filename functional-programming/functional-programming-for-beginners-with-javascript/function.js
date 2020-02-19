/**
 * Currying
 */

// function greet(greeting, name) {
//     return `${greeting} ${name}`;
// }

function greet(greeting) {
    return function(name) {
        return `${greeting} ${name}`;
    };
}

// console.log(greet('Good Morning', 'James'));
// console.log(greet('Good Morning')('James'));

const friends = ['Nate', 'Jim', 'Scott', 'Dean'];

//const friendGreeting = friends.map(name => greet('Good Morning', name));
const friendGreeting = friends.map(greet('Good Morning'));

console.log(friendGreeting)