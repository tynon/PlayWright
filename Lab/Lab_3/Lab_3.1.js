const {
    filterEvenNumber,
    filterOddNumber
}  = require ('../../utils/ArrayHelper')


let intArr = [1, 2, 3, 4, 5];

let totalEvenNumber = intArr.filter(filterEvenNumber).length;
let totalOddNumber = intArr.filter(filterOddNumber).length;
console.log("totalOddNumber: ", totalEvenNumber);
console.log("totalOddNumber: ", totalOddNumber);
