const {filterEvenNumber} = require('../utils/ArrayHelper')

let myNumArray = [1, 2, 3, 4, 5];

//1. Most of methods to process an array can accept a function
let evenNumber = myNumArray.filter(filterEvenNumber);

//2. the fuction to process the array : (value, index, array)

/*function filterEvenNumber(value, index, array){
    console.log('Processing index at: ', index);
    return value  % 2 === 0;
}
*/

for (const value of evenNumber) {
    console.log(value);
    
}