const palindromes = function (str) {
strNew = str.replaceAll(/ /g,'')
            .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
            .toLowerCase();
const letters = Array.from(strNew);
const newLetters = letters.map((x,i,a) => a[a.length-1-i]);
const answerTo = newLetters.every((x,i,a) =>a[i] === letters[i]);
return answerTo;
};

// Do not edit below this line
module.exports = palindromes;
