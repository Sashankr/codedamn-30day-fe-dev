/*
Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  let string = Array.from(str);
  let revString=[];

  for(i=string.length-1;i>=0;--i){
     revString.push(string[i]) ;
  }
return revString.toString();
}

console.log(reverseString("hello"));
