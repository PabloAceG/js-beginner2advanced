// Use Babel to translate ES6 to ES older versions (some browsers do not support 
// ES6 so far)


// NEW VARIABLES
// LET
// Replacement for var
// Do not support hoisting
let name = "Pablo";
let sum  = "22";
// CONST
// Do not support hoisting
const pi = 3.1416


// TEMPLATE STRING
// Strings which allows embedding expressions inside it
// To create them use '${}'
const cName = "Pepe";
const cSurname = "The Frong";
function getFullName(firstname, lastname) {
    return '${firstname} ${lastname}';
}
const greeting = 'Hello ${cName}';
const otherGreet = 'Hello ${getFullName(cName, cSurname)}';


// ARROW FUNCTIONS
// New way of defining functions, bring clarity and code reduction
// function greetings(name) {
//    return 'Welcome ' + name;
//}
const greetings = (name) => { // Use parentheses for multiple arguments
    return 'Welcome ${name}';
}
// Can also use
const mGreetings = name => 'Welcome ${name}';


// REST OPERATOR
// Equivalent to passing an array as argument
const mSum = (...args) => console.log(args);  
// can be used with other arguments
const nSum = (n1, n2, ...args) => { // Must always be at the end
    let sum = n1 + n2;
    for (let i=0; i<args.length; i++) {
        sum += args[i];
    }
    console.log(sum);
}


// SPREAD OPERATOR
// Allows arrays and objects to be expanded into:
//  - elements in case of array
//  - key-value pairs in case of object
let mArr1 = [1, 2, 3, 4, 5];
let mArr2 = mArr1; // Passed as reference, any change on mArr1 affects mArr2
let mArr3 = [...mArr1]; // Creates a new array using mArr1 values

let cArr1 = mArr1.concat(mArr2);
let cArr2 = [...mArr1, ...mArr2]; // Same result as cArr1
                                  // Also works with Objects
let cArr3 = [0, ...mArr1, ...mArr2, 6]; // Allows concatenating more elements


// DESTRUCTURING
// Allows to unpack arrays or objects into a bunch of variables, making
// work with arrays and objects more convenient
const myName = "Pablo Acereda Garcia";
const nameArr = myName.split(' ');
let [firstname, middlename] = nameArr; // Selects first 2 elements of array
                                       // Sequence matters 
let [fName, , lName] = nameArr; // Skips middlename
// Same with objects, but the variable and the key must be the same
const person = {
    firstname: 'John',
    middlename: 'Doe',
    lastname: 'Doe',
    age: 18
}
let {ofName, oAge} = person;
// For objects can also directly assign a variable as key-value pair
const numbers = {
    pi, // = pi: 3.1417 OR pi: pi
    sum 
}

// MAP
// Iterates the array and allows passing a callback function to perform some
// operation on each array item. The updated values can be returned by the 
// callback function to create a new array  
// Syntax: arr.map((item) => { });
// Old school
const mArr = [1, 2, 3, 4, 5];
let newArr = [];
const doubleValues = (item) => (item * 2);
for (let i=0; i<mArr.length; i++) {
    newArr.push(doubleValues(mArr[i]));
}
// Now
let newArr = mArr.map((data, pos) => { // (data, position)
    return data * 2
});
// With objects
let oArr = [
    {
        name: 'John Doe',
        experience: 2,
        type: 'Programmer'
    },
    {
        name: 'John Trois',
        experience: 3,
        type: 'Developer'
    },
    {
        name: 'John Quatre',
        experience: 4,
        type: 'Engineer'
    }];
let newOArr = oArr.map((data, pos) => {
    return {
        name: data.name,
        experience: data.experience
    }
});


// REDUCE
// Iterates through array and accepts callback function to perform some action
// on the array element. Difference with map() is that reduce() passes the 
// result of the callback from one iteration to the next one. This callback 
// result is called accumulator (can be of any type). Must be instantiated and 
// passed when calling reduce()
// Syntax: arr.reduce((acc, item) => { }, acc_default_value)
// mArr = [1, 2, 3, 4, 5]; --> instantiated above. Line 94
const result = mArr.reduce((acc, item) => {
    // acc on first iteration has the value of acc_default_value, in this case
    // it is 0
    return acc + item;
}, 0);
console.log(result); // 15


// FILTER
// Iterates array to create a new one filtering which elements should be added,
// based on a condition
// Syntax: arr.filter(item => { return true/false to add/skip current item })
// mArr = [1, 2, 3, 4, 5]; --> instantiated above. Line 94
const resultArr = mArr.filter(number => {
    // return true; // --> all elements added
    // return false; // --> no element added
    return numer % 2 === 0;
    // with objects can use a specific field to fulfill condition
});


// FIND & FINDINDEX
// - find(): search for element in array that matches condition. Returns
//     first element matched
const integersArr = [-3, -2, -1, 0, 1, 2, 3];
const rIntArr = integersArr.find(number => {
    // return true; // --> first element: -3
    // return false; // --> undefined
    return (number % 2 === 0 && num >= 0); // 0 (element)
});
// -findIndex(): same as find() but returns the index of the element instead of
//     the element itself
const rIntArr = integersArr.findIndex(number => {
    // return true; // --> 0
    // return false; // --> undefined
    return (number % 2 === 0 && num >= 0); // 3 (position)
});


// CLASSES
// Instead of creating object function creation:
// function Person(name, surname) ...
// Uses the class implementation
// Can apply changes on functions, strings and all other ES6 functionalities


// INHERITANCE
// ES6 provides extends keyword
// class ChildClass extends ParentClass { }
// Remember:
// constructor(parentAttrib, ...) {
//     super(parentAttrib);
//     ...
// }


// CALLBACKS & PROMISES
// Fetching data from backend is asynchronous operation. JS executes line by 
// line code, so JS does not wait for the response and executes the next line.
// We give the asynchronous operation a function to call when it is completed.
// This function is called Callback function
const url = 'https://jsonplaceholder.typicode.com/posts'
$.get(url, (response) => {
    console.log(response);
    const id = 1;
    $.get(url + '/${id}', (response) => {
        console.log(response);
        $.get(url + '/${id}/comments', (response) => {
            console.log(response);
        }).fail(err => {
            console.log(err)
        });
    }).fail(err => {
        console.log(err)
    });
}).fail(err => {
    console.log(err)
});
// To avoid Callback Hell (a Callback inside a Callback - like above), JS uses 
// Promises
// It is used to handle asynchronous result of operations. It differs the 
// execution of a code block until an asynchronous request is completed. This 
// way, other operations can keep running without interruption
// It has 3 states:
// - Pending: Operation is going on
// - Fulfilled: Operation was completed
// - Rejected: Operation did not complete and error was thrown
// Syntax: 
// const mPromise = new Promise((resolve, reject) => {
//      promise body
//      resolve() -> when operation success
//      reject() -> when operation fails   
// })
// Previous code (line 199-215) now turns to:
const postListPromise = new Promise((resolve, reject) => {
    $.get(url, (data) => {
        resolve(data);
    }).fail(err => {
        reject(new Error('Call failed for GET POST List Request with status ${err.status}'));
    });
});

const postDetailsPromise = (data) => new Promise((resolve, reject) => {
    $.get(url + '/${data[0].id}', (response) => {
        resolve(response);
    }).fail(err => {
        reject(new Error('Call failed for GET DETAILS ${err.status}'));
    });
});

postListPromise
.then(response => postDetailsPromise)
.then((detResponse) => {
    console.log('POST DETAILS RESPONSE ==> ', detResponse);
})
.catch((err) => { // As uses the same statement, all function errors are 
                  // handled by the same catch() funtion. Only one is needed
    console.log('Call failed ==> ', err);
});

// then()
// when resolve() is executed. Receives data passed as resolve() arguments
// catch()
// when reject() is executed. Receives data passed as reject() arguments