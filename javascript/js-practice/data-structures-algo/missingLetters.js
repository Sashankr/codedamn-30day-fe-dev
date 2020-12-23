/*

Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
  
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  console.log(alphabet);
  
  str = str.split('');

  for(let i=0;i<alphabet.length;i++){
    if(!alphabet.includes(str)){
      console.log(str[i]);
    }
  }


}

fearNotLetter("abce");
