# Unibits-Games-Task

## UNITBITS-GAMES ASSIGNMENTS
Given Input:

arr: [1, 3, 2, 2, -4, -6, -2, 8] target: 4 Initialize variables:

arr1: [] mergedArr: [] arr2: [] doubledTarget: 8 Find the first combinations:

Iterate over the elements of arr using two nested loops. If the sum of two elements equals the target, add the pair [arr[i], arr[j]] to arr1. After the iteration, arr1 contains the first combinations: [[1, 3], [2, 2], [-4, 8], [-6, 2]]. Merge the array and sort it:

Copy the elements of arr to mergedArr using the spread operator. Sort mergedArr in ascending order: [-6, -4, -2, 1, 2, 2, 2, 3, 8]. Find the second combinations:

Call the recursive function findSecondCombination with initial values: startIndex = 0, arr1 = [], curSum = 0. Inside findSecondCombination, check if the curSum is equal to the doubledTarget (8). If it is, add a copy of arr1 to arr2. Otherwise, iterate over the remaining elements of mergedArr starting from startIndex. If the current sum (curSum + num) is less than or equal to doubledTarget, add num to arr1 and make a recursive call to findSecondCombination with an updated startIndex, arr1, and curSum. After the iteration, arr2 contains the second combinations. Return the result:

Return an array containing arr1, mergedArr, and arr2. Output:

First Combination For '4': [[1, 3], [2, 2], [-4, 8], [-6, 2]] Merge Into a single Array: [-6, -4, -2, 1, 2, 2, 2, 3, 8] Second Combination For '8': [ [ -6, -2, 1, 2, 2, 3, 8 ], [ -6, 1, 2, 3, 8 ], [ -6, 1, 2, 3, 8 ], [ -4, -2, 1, 2, 3, 8 ], [ -4, -2, 1, 2, 3, 8 ], [ -4, 1, 3, 8 ], [ -4, 2, 2, 8 ], [ -2, 2, 8 ], [ -2, 2, 8 ], [ 1, 2, 2, 3 ], [ 8 ] ]