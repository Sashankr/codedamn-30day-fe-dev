/*

Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".



*/


function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();
  console.log(word1, word2);
  console.log("w2 length: ",word2.length);

  let matching = 0;

  for (let i = 0; i < word2.length; i++) {
   // console.log(word2.charAt(i));
    if (word1.includes(word2.charAt(i))) {
      matching++;
  }
  // console.log("Matching words: ",matching);
  }
  

  if (matching == word2.length) {
    console.log("All words match");
    return true;
  }
  else {
    console.log(word2.length-matching ,"words not matching");
    return false
  }
}

console.log(mutation(["hello", "hey"]));