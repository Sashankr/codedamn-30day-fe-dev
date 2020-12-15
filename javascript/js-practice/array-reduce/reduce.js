let numbers = [10,20,30,40,50];
var count=0;
let res = numbers.reduce((accumilator,currentValue)=>{
  count++;
  return accumilator+currentValue;
},0)
console.log(count);
console.log(res);