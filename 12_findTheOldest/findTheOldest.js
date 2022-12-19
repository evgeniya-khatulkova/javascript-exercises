const findTheOldest = function(people) {
const currentDate = new Date;
const useYear = currentDate.getFullYear();

const findIt = people.sort((a, b) => ((a.yearOfDeath || useYear) - a.yearOfBirth) > ((b.yearOfDeath || useYear) - b.yearOfBirth) ? -1 : 1);
return findIt[0];
};

// Do not edit below this line
module.exports = findTheOldest;
