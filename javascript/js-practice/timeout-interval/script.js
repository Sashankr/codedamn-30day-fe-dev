let timeout = document.getElementById("title");
let increment = document.getElementById("increment");

let stopTimeout = setTimeout(()=>{
  timeout.innerText="Text changed after 4 secs";
  
},4000);

console.log(stopTimeout);

var count=1;
let stop =  setInterval( () =>{
  increment.innerText = ++count;
  if(count ==100){
    clearInterval(stop);
  } 
},20)