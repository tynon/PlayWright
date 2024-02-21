let myArray = [1, 2, 3, 4, 5];

console.log('Array length: ', myArray.length);
console.log('Value of the 2nd number before updating', myArray[1]);
myArray[1] = 100;
console.log('Value of the 2nd number before updating', myArray[1]);

// add 1 gia tri vao cuoi
myArray.push(6);
console.log(myArray);


//Remove  last element
myArray.pop();
console.log('After removing last element', myArray);

// Remove first element
myArray.shift();
console.log('After removing fisrt element', myArray);


// Delete | splice
myArray.splice(0,2);
console.log(myArray);

// insert | splice
let myNewArray = [1, 3, 4, 5];
myNewArray.splice(1,0,2);
console.log(myNewArray);