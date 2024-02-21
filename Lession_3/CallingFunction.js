const NumberMethods = require('../utils/NumberHandler');

let result = NumberMethods.divide1(4,3)
console.log('4/3 : ',result);
console.log('Is 5 even Number: ', NumberMethods.isEvenNumber1(5));


// Destructuring
const {
    divide1,
    isEvenNumber1
} = require('../utils/NumberHandler');

console.log('4/3 : ',divide1(4,3));
console.log('Is 5 even Number: ',isEvenNumber1(5));