/*

Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {

  let newArray = [];
  for(let i=0;i<arr.length;i+=size){
    newArray.push(arr.slice(i,i+size));
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));