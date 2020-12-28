let myBlock;

let myFunctionList;
let funlist =[];
const movementArray =["right","left","up","down"]; 

document.addEventListener("DOMContentLoaded", function () {
  console.log("ready");

  myBlock = document.createElement("div");
  myBlock.textContent = "Dynamic Block";
  myBlock.style.width = "200px";
  myBlock.style.height = "200px";
  myBlock.style.backgroundColor = "teal";
  myBlock.style.fontWeight = "bold";
  myBlock.style.lineHeight = "200px";
  myBlock.style.fontFamily="sans-serif";
  myBlock.style.textTransform="uppercase";
  myBlock.style.textAlign = "center";
  myBlock.style.position ="absolute";
  myBlock.style.top = "300px";
  myBlock.style.left = "300px";
  document.body.appendChild(myBlock);
  myBlock.style.transition = "0.2s linear";

  myFunctionList=document.createElement("div");
  document.body.appendChild(myFunctionList);

});

document.addEventListener("keydown",function(e){
  e.preventDefault();
  let keyC = e.key;
  console.log(keyC);

  if(keyC ==="ArrowUp") {
    addFun("up");
  }
  else if(keyC === "ArrowDown") {
    addFun("down");
  }
  else if(keyC === "ArrowLeft") {
    addFun("left");
  }
  else if(keyC === "ArrowRight") {
    addFun("right");
  }
  else if(keyC ==="c"){
    myBlock.style.backgroundColor = randomColor();
  }
  else if(keyC==="r"){
    let temp = movementArray[Math.floor(Math.random()*movementArray.length)];
    addFun(temp);
  }
  else if(keyC==="Enter" || keyC===""){
    mover();
  }
});

function randomColor(){
  return "#"+Math.random().toString(16).substr(-6);
}

function goRight(){
  let temp = myBlock.offsetLeft;
  temp+=50;
  myBlock.style.left = temp+"px";
}

function goLeft(){
  let temp = myBlock.offsetLeft;
  temp-=50;
  myBlock.style.left = temp+"px";
}

function goUp(){
  let temp = myBlock.offsetTop;
  temp-=50;
  myBlock.style.top = temp+"px";
}

function goDown(){
  let temp = myBlock.offsetTop;
  temp+=50;
  myBlock.style.top = temp+"px";
}



function addFun(val){
  // console.log(funlist);
  let span = document.createElement("span");
  span.textContent="+"+val;
  span.style.padding="10px";
  span.style.border="1px solid #ddd";
  myFunctionList.appendChild(span);
  funlist.push(span);
  span.addEventListener("mouseover",function(){
    this.style.backgroundColor="red";
    this.style.color="#fff";
  }) 
  span.addEventListener("mouseout",function(){
    this.style.backgroundColor="white";
    this.style.color="black";
  })

  span.addEventListener("click",function(){
    let curIndex = funlist.indexOf(this);
    let tempRemove = funlist.splice(curIndex,1);
    myFunctionList.removeChild(this);
  })
}

function mover(){
  if(funlist.length>0){
    let cur = myBlock.getBoundingClientRect();
    console.log(cur);
    let el = funlist.shift();
    let item = el.textContent.replace("+","");
    myFunctionList.removeChild(el);
    myBlock.innerHTML="Move:"+item; 
    console.log(item);

    if(item=="left"){
      myBlock.style.left= cur.left-cur.width+"px";
    }
    if(item=="right"){
      myBlock.style.left= cur.left+ cur.width+"px";
    }

    if(item=="up"){
      myBlock.style.top= cur.top - cur.height+"px";
    }

    if(item=="down"){
      myBlock.style.top= cur.top + cur.height+"px";
    }
    setTimeout(mover,300);
  }
  else{
    myBlock.innerHTML="SET Path";
    return;
  }
}