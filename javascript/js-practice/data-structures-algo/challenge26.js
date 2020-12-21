/*

Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring

*/

function confirmEnding(str, target) {

  // let stringEndingLength = target.length;

  // return str.substring(str.length-stringEndingLength)===target?true:false;

  return str.endsWith(target)?true:false;

}

console.log(confirmEnding("Bastian", "an"));
