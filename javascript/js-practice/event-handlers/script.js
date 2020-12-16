function changeText(){
  let title = document.getElementById("title");
  title.innerHTML = "HELLO <i>JAVASCRIPT</i>"
}

let log = document.getElementById("log");

log.onclick = function(){
  let data = document.getElementById("data");
  data.innerHTML = "Loading your profile data";
}