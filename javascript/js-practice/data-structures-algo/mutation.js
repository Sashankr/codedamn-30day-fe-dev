/*

Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".



*/


function mutation(arr) {
  let word1 = arr[0].split('');
  let word2 = arr[1].split('');

  console.log(word1);
  console.log(word2);
  let matching=0;

  for(let i=0;i<word1.length;i++){
    if(word2.includes(word1[i])){
      matching++;
   }
  }

  if(matching !== word1.length){
    console.log(matching);
    return false;
  }

  return true;
  
}

console.log(mutation(["heyd", "heya"]));
