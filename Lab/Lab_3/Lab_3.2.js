let intArr = [1,2,3,5,4]
let minNumber = intArr[0];
let maxNumber = intArr[0];

for(let i = 1; i < intArr.length; i++){
    if(intArr[i] < minNumber){
        minNumber = intArr[i];
    }else if(intArr[i]> maxNumber){
        maxNumber = intArr[i]
    }
}

console.log('minNumber: ', minNumber);
console.log('maxNumber: ', maxNumber);