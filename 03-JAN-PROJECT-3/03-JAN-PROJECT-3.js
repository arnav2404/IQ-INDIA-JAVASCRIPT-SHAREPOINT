// variables
// Variable is location used to store data which is easily accessible in future use.

console.log(5+5)

var x=34
console.log(x) // will show x value
console.log(89+x) // will add to the x value
// Reassigning Valid 

var x=34
var x=40 // last value is always considered beacuse javascript run line by line
console.log(x)
 
// ----let
let j; // declare
j=60; // define
console.log(`Output : ${j}`)
// Reassigning Invalid but if variables

// ------ const
const pi=3.14
console.log(pi)

//---------RULES OF VARIABLES----------//

// 1. Variables cannot start with any number.
// ex let 67=89 // error

// 2. Variables cannot start with any Symbol, excluded(_)
// ex let _34=69;

let last_name="arnav"
console.log(last_name)

// 3. Variables cannot include whitespaces.

// 4. Variables in Javascript are case-sensitive.

// let a=98; // both have different meaning as "a" and "A" are not same
// let A=98;

// -----------------------
let k=65
let l=85
res=k+l
console.log(`Result : ${res}`)

// Data Types in Javascript
// I. Primitive Data Types
//   1. Numbers* -> float,positive,negative
//   2. Strings*
//   3. Undefined
//   4. null
//   5. Boolean*    //Important(*)