const input = document.querySelector("textarea[name=txtinput]");

const output = document.querySelector("textarea[name=output]");

let counter = document.querySelector(".counter");

const getEmailBtn = document.querySelector("#btn");
getEmailBtn.addEventListener("click", function () {
  // console.log("click");


  let temp = input.value;
  console.log(temp);
  let expression = /([A-Za-z0-9._-]+@[a-zA-z0-9._-]+\.[a-zA-z0-9._-]+)/gi;
  let emailData = temp.match(expression);
  console.log(emailData);

  let holder = [];
  for (let i = 0; i < emailData.length; i++) {
    if (holder.indexOf(emailData[i])==-1) {
      holder.push(emailData[i]);
    }
  }

  let tempHolder = holder.join("\t");
  output.innerText = tempHolder;
  counter.innerHTML = holder.length + " Found";

  output.addEventListener("click",function(){
    this.select();
  })

})