const output = document.querySelector(".output");
const popup_triggers = document.querySelectorAll(".popup-trigger");
const closebtn = document.querySelector(".close");
const heading = document.querySelector(".heading");
const message = document.querySelector(".message");
const signup = document.querySelector(".signup");
const signin = document.querySelector(".signin");

popup_triggers.forEach( (triggers)=>{
  triggers.addEventListener(("click"),function(){

    if(triggers.innerHTML=="Sign Up"){
      title = this.getAttribute("data-message");
      signUp(title);
    }

    if(triggers.innerHTML=="Sign In"){
      title = this.getAttribute("data-message");
      signIn(title);
    }



  })
} )

function signUp(title){
  heading.innerText = title;
  message.appendChild(signup);
  signup.classList.remove("hidden");
  signin.classList.add("hidden");
  output.classList.remove("hidden");

}

function signIn(title){
  heading.innerText = title;
  message.appendChild(signin);
  signin.classList.remove("hidden");
  signup.classList.add("hidden");
  output.classList.remove("hidden");

}

closebtn.addEventListener("click",function(){
    output.classList.add("hidden");
})