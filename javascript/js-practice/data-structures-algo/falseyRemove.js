/*

Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
  let newArray=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]){
      newArray.push(arr[i])
    }
  }
  return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
