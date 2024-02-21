let array = [12,34,1,16,28];
let unsortedPosition = array.length -1;

while(unsortedPosition > 0){
    for (let i = 0; i < unsortedPosition; i++) {
        const leftValue = array[i];
        const rightValue = array[i] + 1;
        if(leftValue > rightValue){
            array[i] = rightValue;
            array[i + 1] = leftValue;

        }
        unsortedPosition--;
    }
}

console.log(array);