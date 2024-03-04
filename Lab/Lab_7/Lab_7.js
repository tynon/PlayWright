
const readline = require('readline-sync');
const userInput = getUserInput();
let words = userInput.replace(/,/gi,"").split(" ");
groupWords();

function groupWords() {
    const groupedWords = {};
    words.forEach(function (word) {
        if(groupedWords[word]) {
            groupedWords[word]++;
        } else {
            groupedWords[word] = 1;
        }
    });
    console.log(groupedWords);
}


/** Anohter way
 * 
 * function groupWords(){
    let groupWords = {};
    for(const word of words){
        if(groupWords.hasOwnProperty(word)){
            groupWords[word] = groupWords[word] + 1
        }
        else{
            groupWords[word] = 1
        }
    }
    return groupWords;
}
*/

function getUserInput() {
    return readline.question('Input your string: ')
}