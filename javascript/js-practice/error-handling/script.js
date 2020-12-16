let i =20;
let j =0;

try{

  if(j==0){
    throw "j cannot be zero";
  }
  console.log(i/j);
} catch(err){
  console.log(err);
}

console.log("further code");