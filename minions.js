const minions = [
  "bob",
  "kevin",
  "stuart",
  "dave",
  "jerry",
  "mark",
  "tim",
  "phil",
  "carl",
];

// forEach
minions.forEach((minion) => {
  console.log(minion + " aqui!");
});

// Map
const capitalizedMinions = minions.map((value, index) => {
  if (value !== "kevin") {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  } else {
    return value;
  }
});
console.log(capitalizedMinions);

// Filter
const actuallyCapitalizedMinions = capitalizedMinions.filter((value, index) => {
  if (value !== "kevin") {
    return value;
  }
});
console.log(actuallyCapitalizedMinions);

// Every
const allCapitalized = actuallyCapitalizedMinions.every((value, index) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});
console.log(allCapitalized);

// Bonus Methods:
// Every
const checkCapital = () => {
  value.charAt(0).toUpperCase();
};

const isCapitalized = (minion) => {
  for (minion of minions) {
    if (minion === checkCapital) {
      return true;
    } else {
      return false;
    }
  }
};
console.log(isCapitalized());

const reallyActuallyCapitalizeMinions = capitalizedMinions.every(
  (value, index) => {
    return isCapitalized(value);
  }
);
console.log(reallyActuallyCapitalizeMinions);

// Find
const uncapitalizedMinion = capitalizedMinions.find((value, index) => {
  return value === value.toLowerCase();
});

console.log(uncapitalizedMinion);

// FindIndex
const findKevinIndex = capitalizedMinions.findIndex((value, index) => {
  return value === value.toLowerCase();
});
console.log(findKevinIndex);

capitalizedMinions[1] =
  capitalizedMinions[1].charAt(0).toUpperCase() +
  capitalizedMinions[1].slice(1).toLowerCase();

const finallyCapitalizedMinions = capitalizedMinions.every((value, index) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});
console.log(finallyCapitalizedMinions);

// Reduce
const minionNameLengths = capitalizedMinions.map((value, index) => {
  return value.length;
});
console.log(minionNameLengths);

const sumOfMinionNames = minionNameLengths.reduce((acc, value, index) => {
  return acc + value;
}, 0);
console.log(sumOfMinionNames);

// Some
const lengthsSixOrOver = minionNameLengths.some((value, index) => {
  return value >= 6;
});
console.log(lengthsSixOrOver);

const lengthsSevenOrOver = minionNameLengths.some((value, index) => {
  return value >= 7;
});
console.log(lengthsSevenOrOver);

// Change Kevin's name back to all lowercase.
capitalizedMinions[1] = capitalizedMinions[1].toLowerCase();

// Check to see if some names are capitalized.
const isSomeNamesCapitalized = capitalizedMinions.some((value, index) => {
  return value.charAt(0).toUpperCase();
});
console.log("Are some names capitalized?: " + isSomeNamesCapitalized);

// Check to see if some of the names are lowercased
const isSomeNamesLowercase = capitalizedMinions.some((value, index) => {
  return value.toLowerCase();
});
console.log("Are some names lowercased?: " + isSomeNamesLowercase);

// Sort
