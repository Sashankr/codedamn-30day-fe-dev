const wording = ["Do you like JavaScript as much as I do","Hope you are having fun this is a simple game you can make.","Source code is included so you can create your own version of the challenge"];

let startTime,endTime;

const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
button.addEventListener("click",function(){
  console.log(this.innerText);
  if(this.innerText=="Start"){
    playText.innerHTML="";
    playText.disabled=false;
    playGame();
  }
  else if(this.innerText="Done"){ 
    playText.disabled=true;
    button.innerText="Start";
    endPlay();
  }
}); 

function endPlay(){
  let date = new Date();
  endTime = date.getTime();
  let totalTime = ((endTime-startTime)/1000);
  console.log(totalTime);
  let str = playText.value;
  let wordCount = wordCounters(str);
  let speed = Math.round((wordCount/totalTime)*60);
  console.log(speed);
  let finalMessage = "You typed at "+speed+" words per minute";

  if(str !== message.innerText){
    finalMessage+="<br>"+compareWords(message.innerText,str); 
  }
  message.innerHTML= finalMessage;
}

function wordCounters(strWords){
  let response = strWords.split(' ').length;
  console.log(response);
  return response;
}

function compareWords(str1,str2){
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let count = 0;
  words1.forEach(function(item,index){
    if((item)===words2[index]){
      count++;
    }
  })
  return (count+" correct out of "+words1.length);
}


function playGame(){
  let randomNum = Math.floor(Math.random()*wording.length);
  message.innerText = wording[randomNum];
  let date = new Date();
  startTime = date.getTime();
  console.log(startTime );
  button.innerText="Done";
}
