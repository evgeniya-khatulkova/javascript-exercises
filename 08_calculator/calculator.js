const add = function addition (total, currentValue) {
  return total + currentValue;
};

const subtract = function substraction (total, currentValue) {
  return total - currentValue;
};

const sum = function(array1) {
  const dodo = array1.reduce((total, currentValue) => total + currentValue, 0);
  return dodo;
};

const multiply = function(array1) {
  const multy = array1.reduce((total, currentValue) => total * currentValue);
  return multy;
};

const power = function(total, currentValue) {
  return Math.pow(total, currentValue);
};

const factorial = function(array1) { 
  let total = 1;
  if (array1 < 2) {
    return 1;
  } 
  else {
    while(array1 > 0){
    total = total * array1;
    array1--;}
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
