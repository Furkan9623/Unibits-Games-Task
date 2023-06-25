function findCombinations(array, target) {
  const firstCombination = [];
  const mergedArray = [];
  const secondCombination = [];
  const doubledTarget = target * 2;

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        firstCombination.push([array[i], array[j]]);
      }
    }
  }

  mergedArray.push(...array.sort((a, b) => a - b));

  function findSecondCombination(startIndex, combination, currentSum) {
    if (currentSum === doubledTarget) {
      secondCombination.push(combination.slice());
      return;
    }

    if (currentSum > doubledTarget || startIndex >= mergedArray.length) {
      return;
    }

    for (let i = startIndex; i < mergedArray.length; i++) {
      const num = mergedArray[i];
      combination.push(num);
      findSecondCombination(i + 1, combination, currentSum + num);
      combination.pop();
    }
  }

  findSecondCombination(0, [], 0);
  return [firstCombination, mergedArray, secondCombination];
}

// user take input with the help of readline 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the array elements (comma-separated): ", (input) => {
  const array = input.split(" ").map(Number);

  rl.question("Enter the target value: ", (target) => {
    const output = findCombinations(array, Number(target));

    console.log("First Combination For '" + target + "':", output[0]);
    console.log("Merge Into a single Array:", output[1]);
    console.log("Second Combination For '" + target * 2 + "':", output[2]);

    rl.close();
  });
});
