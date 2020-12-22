/*

Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

NoteYou have to use the arguments object.


*/

function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  console.log(args);  
  return arr.filter( (valid)=>{
    return !args.includes(valid);
  } )
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
