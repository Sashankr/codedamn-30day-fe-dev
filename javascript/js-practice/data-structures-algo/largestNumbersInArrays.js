/*

Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/


function largestOfFour(arr) {
  let largestArray = [];
  let sortedArray = [];
  for (let i = 0; i < arr.length; i++) {
    sortedArray.push(arr[i].sort((a, b) => b - a));
  }
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray[i].length; j++) {
      if ((i === 0 && j === 0) || (i === 1 && j === 0) || (i === 2 && j === 0) || (i === 3 && j === 0)) {
        largestArray.push(sortedArray[i][j]);
        break;
      }
    }
  }
  // console.log(largestArray);
  return largestArray;
}


console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);