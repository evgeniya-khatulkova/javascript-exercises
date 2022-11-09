const sumAll = function(firstNumber, secondNumber) {

    let newNumber = 0;

if (firstNumber < 0 || secondNumber < 0) {
    return 'ERROR';
}

if(typeof(firstNumber) == 'number' && typeof(secondNumber) == 'number') { 
if (firstNumber < secondNumber) {
  while(firstNumber <= secondNumber) {
    newNumber += firstNumber;
    firstNumber++;
}
} else {
while(secondNumber <= firstNumber) {
    newNumber += secondNumber;
    secondNumber++;
}
}
return newNumber;
}
else {
    return 'ERROR';
}
}


// Do not edit below this line
module.exports = sumAll;
