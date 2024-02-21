function filterEvenNumber(value, index, array){
    //console.log('Processing index at: ', index);
    return value  % 2 === 0;
}

function filterOddNumber(value, index, array){
    return value % 2 !== 0;
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    filterOddNumber: filterOddNumber
}