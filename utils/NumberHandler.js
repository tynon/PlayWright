function divide(fisrtNum, secondNum){
    let result = fisrtNum / secondNum;
    let upRoundedValue = Math.round(result); // chia làm tròn lên tren 0.5 va làm tròn xuống duoi 0.5
    //let upRoundedValue1 = Math.ceil(result); // chia luôn làm tròn lên
    //let upRoundedValue1 = Math.floor(result); // chia luôn làm tròn xuong
    return upRoundedValue;

}

/**
 * Viet ngan gon
 * function divide(fisrtNum, secondNum){
        return Math.round(fisrtNum / secondNum);
 * 
 */

let result = divide(5, 2)
console.log(result);

function isEvenNumber(number){
    return number % 2 ===0;
}

module.exports = {
    divide1: divide,
    isEvenNumber1: isEvenNumber
}