const myArray = [1, 2, 3, 4];

// adds to the end of  the array
myArray.push(6, 7, 8);

// adds to the start of the array
myArray.unshift(-2, -1, 0);

// removes from the end of the array
myArray.pop();

// removes from the start of the array
myArray.shift();

console.log(myArray);

// To create a new array or filter an specific item in the array
// Concat does not modify array
const letters = ['a', 'b', 'c', 'd'];

const i = 3;

const filterItem = letters
  .slice(0, i - 2)
  .concat(letters.slice(i, letters.length));

console.log(filterItem);

// const filteredItems = items.slice(0, i-1).concat(items.slice(i, items.length))

// This is how you can add to you array without mutating it like I did above with the methods. AKA the Matrix - an array inside an array. I can also add an array in an array that is in an array
const whateves = [['cat', 'dog'], ['car', 'home'], [['Joker', 'Batman']]];

console.log(whateves[2][0][1]);

// using spread
const a = ['stocks', 'bonds', 'crypto'];

const b = ['apple', 'google', 'bitcoin'];

const together = [...b, ...a];
console.log(together);

// This is an array literal which is empty
const someArray = [];
console.log(someArray);

// this is using the key word Array to create an array
// Notice when I put 5, I put 5 empty arrays
// then I will add the .fill() method to put something in the array
const newNew = Array(5).fill('Joker');
console.log(newNew);

// Constructor method is like checking for a typeof

const bobo = 'I am string';
console.log(typeof bobo);

const checkIt = [];
const checkIt2 = {};
const checkIt3 = 'Hello';

console.log(checkIt.constructor === Array);
console.log(checkIt2.constructor === Object);
console.log(checkIt3.constructor === String);

// Array deconstruction
// Giving an array variables and assigning it to the name of the array
const decon = [1, 2, 3, 4, 5, 6];

// const [first, second, third, fouth, fifth, sixth] = decon;

console.log(decon);

// I can also use the spread operator to add the rest of the numbers, which is creating an array from an existing array

const [first, second, ...rest] = decon;

const stringSubstitution = 'Hey';

console.log(`This is a ${stringSubstitution}`);

const string1 = 'Hello';
const string2 = 'there';

const twoStrings = string1 + ' ' + string2;

console.log(twoStrings);
