/*

Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

NoteYou can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {
  let newArray=[];

  arr1.filter( (array1Unique)=>{
      if(arr2.includes(array1Unique)==false){
        console.log(array1Unique);
        newArray.push(array1Unique)
      }
  } )

  arr2.filter( (array2Unique)=>{
    if(arr1.includes(array2Unique)==false){
      console.log(array2Unique);
      newArray.push(array2Unique);
    }
  } )

  return newArray;

}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
