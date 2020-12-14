/* VARIABLES and DATA TYPES*/

const name = "Joker"; //string
let age = 22;//number
var isPrime =true;// boolean

/* FUNCTIONS AND FUNCTION PARAMETERS */

function random_Function(){
  console.log("Repeat"); // console.log prints out whatever we write into the console
}

//calling function
random_Function();//Repeat
random_Function();//Repeat
random_Function();//Repeat

/* Working with return statement and parameterized function */
// num2 has default value of 20 incase we don't pass an arguement to it.
function add(num1, num2 =20){
  return num1 + num2;
}

const result1 = add(10,39);
console.log(result1);

const result2 = add(10);
console.log(result2);
