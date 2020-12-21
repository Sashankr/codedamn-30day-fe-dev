/*

Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

*/


function truncateString(str, num) {
  // return str;

  if(str.length>num){
    return str.slice(0,num)+"...";
  }
  else{
    return str;
  }



}

let res = truncateString("A-tisket a-tasket A green and yellow basket",12);
console.log(res);

let res2 = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
console.log(res2);