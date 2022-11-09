const removeFromArray = function removeFromArray(array, ...somethings) {

   somethings.forEach((something) => {
    count = array.length - 1;
for(let i = 0; i <= count; i++) {
    if(array[i] === something) {
        array.splice(i, 1);
    }
}
});
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
