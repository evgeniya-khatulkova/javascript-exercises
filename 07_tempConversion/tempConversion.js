const ftoc = function ftoc(degreeInF) {
let newDegreeC = (degreeInF - 32) * 0.5556;
let celsius = newDegreeC.toFixed(1);
let c = Number(celsius);
return c;
};

const ctof = function(degreeInC) {
let newDegreeF = (degreeInC * 1.8) + 32; 
let fahrenheit = newDegreeF.toFixed(1);
let f = Number(fahrenheit); 
return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
