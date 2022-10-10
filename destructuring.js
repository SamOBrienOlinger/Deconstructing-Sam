/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

/*let ages = [10, 20, 99];

let john = ages[0];
let mary = ages [1];
let joejoe= ages[2];

console.log (john, mary, joejoe);*/

// Destructuring objects

/*
let = [john, mary, joejoe] = ages;

console.log(ages);*/


let jobs = {john: "pooper", mary: "scooper", joejoe: "trooper"};

let {john, mary, joejoe} = jobs;

console.log(john, mary, joejoe);


// Destructuring subsets

let languages = ["slang", "phrases", "bold words", "hexes"];

let [firstLang, secondLang] = languages; 

console.log(firstLang, secondLang);

let [, , fluffyLang, funnyLang] = languages

console.log(fluffyLang, funnyLang);


let languages2 = {

    first: "murican",
    second: "phrench",
    third: "giberish",
    fourth: "esperanto"
}; 

let {first, third} = languages2; 

console.log(first, third);

// Using rest parameter syntax

let fruits = ["apple",  "orange", "banana", "peach", "cherry"]; 

let [firstFave, secondFave, ...others] = fruits

console.log(firstFave, secondFave);
console.log(others);

let drinks = {

    martha: "Guinness",
    mick: "Bud",
    maggie: "whiskey",
    morgan: "soda"
};

let {martha, maggie, ...rest} = drinks;

console.log(martha, maggie);
console.log(rest);

