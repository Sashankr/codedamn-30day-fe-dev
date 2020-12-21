/*

Slice and Splice

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {

  arr2copy = arr2.splice(0);
  for(let i=0;i<arr1.length;i++){
    arr2copy.splice(n,0,arr1[i]);
    n++;
  }
  return arr2copy;

}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));