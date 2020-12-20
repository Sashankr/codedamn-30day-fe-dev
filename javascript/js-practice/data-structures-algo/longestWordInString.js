/*

Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/


function findLongestWordLength(str) {

  let splitStr = str.split(' ');
  console.log(splitStr);
  let longest =0;
  for(let i=0;i<splitStr.length;i++){
    if(splitStr[i].length>longest){
      longest = splitStr[i].length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
