/*

Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

*/

function sumAll(arr) {
  let sum=0;
  if(arr[0]<arr[1]){
    for(arr[0];arr[0]<=arr[1];arr[0]++){
      sum+=arr[0];
    }
  }
  else{
    for(arr[1];arr[1]<=arr[0];arr[1]++){
      sum+=arr[1];
    }
  }
  console.log(sum);
  return sum;
}

sumAll([4, 1]);
