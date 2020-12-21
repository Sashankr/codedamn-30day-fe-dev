/*

Repeat a String Repeat a String

Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {

  let repeatedString = "";
  if (num < 0) {
    return repeatedString = "";
  }
  for (let i = 0; i < num; i++) {

    repeatedString += str;
  }
  return repeatedString;

  // USING repeat function
  // let repeatedStr = (str, num) => str.repeat(num);
  // return repeatedStr(str, num);


}

console.log(repeatStringNumTimes("abc", 3));