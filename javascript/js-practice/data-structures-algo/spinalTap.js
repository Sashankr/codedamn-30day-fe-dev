/*

Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
 let newStr = str.replace(/([a-z])([A-Z)])/g,'$1_$2');
 let regexp = /[\s_]+/g;
 return newStr.split(regexp).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));