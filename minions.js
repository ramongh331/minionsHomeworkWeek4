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
// Logging every name in the minions array using forEach.
minions.forEach((minion) => {
  console.log(minion + " aqui!");
});

// Map
// Capitalizing every name in the minions array that is not kevin.
const capitalizedMinions = minions.map((value, index) => {
  if (value !== "kevin") {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  } else {
    return value;
  }
});
console.log(capitalizedMinions);

// Filter
// Filtering only the names that are capitalized and placing them into a new array.
const actuallyCapitalizedMinions = capitalizedMinions.filter((value, index) => {
  if (value !== "kevin") {
    return value;
  }
});
console.log(actuallyCapitalizedMinions);

// Every
// Checking to see if all the names in the actuallyCapitalizedMinions are capitalized.
const allCapitalized = actuallyCapitalizedMinions.every((value, index) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});
console.log("Is every Minion's name capitalized?: " + allCapitalized);

// Bonus Methods:
// Every
// Creating a function that capitalizes the first letter of the minion names.
const checkCapital = () => {
  value.charAt(0).toUpperCase();
};

// Iterating through the minions array to see if all of the first letters in their names are capitalized.
const isCapitalized = (minion) => {
  for (minion of minions) {
    if (minion === checkCapital) {
      return true;
    } else {
      return false;
    }
  }
};

// Checking to see if every name in the capitalizedMinions array is capitalized.
const reallyActuallyCapitalizeMinions = capitalizedMinions.every(
  (value, index) => {
    return isCapitalized(value);
  }
);
console.log(
  "Is every name in capitalizedMinions array capitalized?: " +
    reallyActuallyCapitalizeMinions
);

// Find
// Finding and logging the name(s) that are uncapitalized in the capitalizedMinions array.
const uncapitalizedMinion = capitalizedMinions.find((value, index) => {
  return value === value.toLowerCase();
});

console.log("This name is uncapitalized: " + uncapitalizedMinion);

// FindIndex
// Finding and logging the index of the name(s) that are uncapitalized in the capitalizedMinions array.
const findKevinIndex = capitalizedMinions.findIndex((value, index) => {
  return value === value.toLowerCase();
});
console.log("This is the index of the incapped name: " + findKevinIndex);

// Now that the uncapitalized name was found, capitalize the value of index found in the above method.
capitalizedMinions[1] =
  capitalizedMinions[1].charAt(0).toUpperCase() +
  capitalizedMinions[1].slice(1).toLowerCase();

// Checking if, finally,
const finallyCapitalizedMinions = capitalizedMinions.every((value, index) => {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});
console.log("Are all names FINALLY capitalized?: " + finallyCapitalizedMinions);

// Reduce
// Creating an array of the lengths of the minions names.
const minionNameLengths = capitalizedMinions.map((value, index) => {
  return value.length;
});
console.log(minionNameLengths);

// Gathering the total letters in the array.
const sumOfMinionNames = minionNameLengths.reduce((acc, value, index) => {
  return acc + value;
}, 0);
console.log("Total amount of letters in the array: " + sumOfMinionNames);

// Some
// Checking is some of the name lengths are over or equal to 6 letters.
const lengthsSixOrOver = minionNameLengths.some((value, index) => {
  return value >= 6;
});
console.log("Are some name lengths over or equal to 6?: " + lengthsSixOrOver);

// Checking is some of the name lengths are over or equal to 7 letters.
const lengthsSevenOrOver = minionNameLengths.some((value, index) => {
  return value >= 7;
});
console.log("Are some name lengths over or equal to 7?: " + lengthsSevenOrOver);

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
// Sorting the minions names by length in ascending order (I didn't have to create a compare minions function.)
const sortMinions = capitalizedMinions.sort((currentItem, nextItem) => {
  if (currentItem.length < nextItem.length) {
    return -1;
  } else if (currentItem.length > nextItem.length) {
    return 1;
  } else {
    return 0;
  }
});

console.log(sortMinions);
