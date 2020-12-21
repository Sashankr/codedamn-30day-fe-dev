/*

Finders Keepers

Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

*/

function findElement(arr, func) {
  
  // FOR EACH CANNOT BE STOPPED SO I'LL TRY WITH SOME
  // arr.forEach((num) =>{
  //   // console.log(num);
  //   let current = num;
  //   if(func(num) === true){
  //     console.log(current);

  //     return current;
  //   }
  //   else{
  //     return undefined;
  //   }
  // });



  // let num =0;
  // for(let i=0;i<arr.length;i++){
  //   num = arr[i];
  //   if(func(num)===true){
  //     return num;
  //   }
  // }
  // return undefined;
  let number=0;
  arr.some((num) =>{
    // console.log(num);
    if(func(num)===true){
      // console.log(number);
      return number=num;
    }
    else{
      return number =undefined;
    }
  })
  return number;
}

// let res1 = findElement([1, 2, 3, 4], num => num % 2 === 0);
let res2 = findElement([1, 3, 5,8, 9,10], num => num % 2 === 0);

// console.log(res1);
console.log(res2);