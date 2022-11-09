const reverseString = function reverseString(string) {
newString = '';
counter = string.length -1;

while(counter >= 0) {
    newString += string[counter];
    counter--;
}
return newString;
};

// Do not edit below this line
module.exports = reverseString;
