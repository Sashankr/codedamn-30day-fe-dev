/*

Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

*/

function dropElements(arr, func) {
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;  arr.some( (el)=>{
      if(func(el)){
          filteredArray.push(el);
      }
  } );
  console.log(filteredArray);
  return filteredArray;
}

dropElements([1, 2, 3], function(n) {return n > 0; });
