const popups = document.querySelectorAll(".popup");
const popup = document.querySelector(".output");
const popMessage = document.querySelector(".message");
const closeButton = document.querySelector(".close");

for(let i=0;i<popups.length;i++){
  console.log(popups[i]);
  popups[i].addEventListener("click",function(){

    let outputText = this.getAttribute("data-message");
      message(outputText);
  })
}

closeButton.addEventListener("click",function(){
  popup.classList.add("hide");

});

function message(output){
  popup.classList.remove("hide");
  popMessage.innerText = output;
} 