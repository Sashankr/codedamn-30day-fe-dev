const score = document.querySelector(".score");
const message = document.querySelector(".message");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");

let player = {
  speed: 8,
  score: 0
};

startScreen.addEventListener("click", start);

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);



function playGame() {

  let road = gameArea.getBoundingClientRect();

  let car = document.querySelector(".car");
  moveLines();
  moveEnemy(car);
  if (player.start) {
    if (keys.ArrowUp && player.y > road.top) {
      player.y -= player.speed
    }
    if (keys.ArrowDown && player.y < road.bottom - 180) {
      player.y += player.speed
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < (road.width - 50)) {
      player.x += player.speed;
    }
    window.requestAnimationFrame(playGame);

  }
  car.style.left = player.x + 'px';
  car.style.top = player.y + 'px';

  player.score++;
  score.innerHTML = "Score: " + player.score;
}

function endGame() {
  player.start = false;
  score.innerHTML = "GAME OVER | SCORE IS : "+player.score;
  console.log(score.innerHTML);
}




let keys = {

  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
}

function pressOn(e) {
  keys[e.key] = true;
}

function pressOff(e) {
  keys[e.key] = false;
}

function endGame() {
  player.start = false;
  console.log(score.innerHTML);
  message.innerHTML="GAME OVER";
  message.classList.remove("hide");
  startScreen.classList.remove("hide");

}



function start() {
  startScreen.classList.add("hide");
  gameArea.classList.remove("hide");
  gameArea.innerHTML="";
  window.requestAnimationFrame(playGame);
  player.start = true;
  player.score = 0;

  for (let i = 0; i < 10; i++) {
    let lines = document.createElement("div");
    lines.classList.add("line");
    lines.y = i * 150;
    lines.style.top = (i * 150) + "px";
    gameArea.appendChild(lines);
  }


  for (let i = 0; i < 3; i++) {
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.y = ((i + 1) * 600) * -1;
    enemy.style.top = enemy.y + "px";
    enemy.style.left = Math.floor(Math.random() * 150) + "px";
    enemy.style.backgroundColor = randomColor();
    gameArea.appendChild(enemy);
  }



  let car = document.createElement("div");
  gameArea.appendChild(car);
  car.setAttribute("class", "car");
  player.x = car.offsetLeft;
  player.y = car.offsetTop;
}

function moveLines() {
  let lineMove = document.querySelectorAll(".line");
  lineMove.forEach(function (item) {
    if (item.y >= 1500) {
      item.y -= 1500;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}


function moveEnemy(car) {
  let ele = document.querySelectorAll(".enemy");
  ele.forEach(function (item) {

    if (isCollide(car, item)) {
      console.log("HIT");
      endGame();
    }

    if (item.y >= 1500) {
      item.y = -600;
      item.style.left = Math.floor(Math.random() * 350) + "px";
    item.style.backgroundColor = randomColor();

    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bReact = b.getBoundingClientRect();
  return !(

    (aRect.bottom < bReact.top) ||
    (aRect.top > bReact.bottom) ||
    (aRect.right < bReact.left) ||
    (aRect.left > bReact.right)
  )
}

function randomColor(){
  function c(){
    let hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).substr(-2);
  }
  return "#"+c()+c()+c();

}