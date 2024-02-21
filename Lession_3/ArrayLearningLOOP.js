let myNumArray = [1, 2, 3, 4, 5];

for (let i = 0; i < 5 ; i++){
    console.log(i);
}

let arraylength = myNumArray.length;
console.log('arraylenghth',arraylength);
for (let index = 0; index < myNumArray.length; index++) {
    const element = myNumArray[index];
    console.log(element);
}


/**
 * Covert all number in the array into even number
 */
for (let index = 0; index < myNumArray.length; index++) {
    let a = myNumArray[index];
    myNumArray[index] = a * 2;
    console.log('after coverting :', myNumArray[index]);
    
}
/////
for (const value of myNumArray) {
    console.log(value);
}