const playArea ={};
const player ={};
let gameObj;

playArea.stats = document.querySelector(".stats");
playArea.main  = document.querySelector(".main");
playArea.game  = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));


document.addEventListener("DOMContentLoaded",getData);
player.score = 0;
player.items = 3;

playArea.btns.forEach(function(item){
  console.log(item);
  item.addEventListener("click",handleBtn);
})

function getData(){
  fetch("https://cat-fact.herokuapp.com/facts").then(function(rep){
    return rep.json();
  }).then(function(data){
    data.forEach( (el)=>{
      console.log(el.text);
      
    } )
  })

  console.log("DOM Loaded");
}

function handleBtn(e){
  if(e.target.classList.contains("newGame")){
    console.log("YES");
    startGame();
  }
}

function startGame(){
  console.log("start");
}