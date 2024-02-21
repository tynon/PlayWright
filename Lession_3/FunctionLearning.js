/**
 * Group same logice into same place --> reuable, maintanable. extendable, reliable
 * 
 */


// Fuction declaration | It's hoisted to the top 

let myResult = functionName();
console.log(myResult);
function functionName(){
    //Logic to process paramters if any
    return 2;

}


function functionName1(param1, param2){
    //process param1, param2

}

//Fuction expresstion | It's NOT hoisted like Function declaration
console.log(addNumber(1,2))
const addNumber = function(fisrtNum, secondNum){
    return fisrtNum + secondNum;
}
