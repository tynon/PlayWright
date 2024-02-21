
/**
 * Hoisting :
 * let/const : NO hoisting
 * var : hoisting
 * 
 */

//////////////////////////////
/**
 * var myVariable;
 * console.log(myVariable);
 * myVariable = 1;
 * 
 */

console.log(myVariable);
var myVariable = 1;

/////////////////////////
/**
 * var myVariable;
 * myVariable = 1;
 * console.log(myVariable);
 */
var myVariable = 1;
console.log(myVariable);
