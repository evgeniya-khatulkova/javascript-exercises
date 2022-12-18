const fibonacci = function(number) {
if (number < 0 || number === NaN) {
    return "OOPS"
} else {
    let start = 1;
    let total = 0;
    //let myNumber = number - 1;
for (i = 0; i < number; i++) {
    total = total + start; 
    start = total - start;
}
return total;
}};

// Do not edit below this line
module.exports = fibonacci;
