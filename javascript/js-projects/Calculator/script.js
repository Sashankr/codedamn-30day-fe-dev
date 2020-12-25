const calculator = document.querySelector(".calculator");

const myKeys = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  ["C", "0", "=", "/"]
];

const myOperators = ["+", "-", "*", "/"];
let myOutput;

document.addEventListener("DOMContentLoaded", function () {

  myOutput = document.createElement("div");
  myOutput.innerHTML = "0";
  myOutput.classList.add("output");
  calculator.appendChild(myOutput);

  for (let i = 0; i < myKeys.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < myKeys[i].length; j++) {
      let btn = document.createElement("div");
      btn.innerHTML = myKeys[i][j];
      // console.log(btn);
      btn.classList.add("btn");
      btn.addEventListener("click", btnHit);
      row.appendChild(btn);
    }
    calculator.appendChild(row);
  }

  // calculator.appendChild(row);

  function btnHit() {
    let myVal = this.innerText;
    let myCal = myOutput.innerText;


    if (myCal == "0") {
      myCal ="";
    }

    if (myVal == "=") {
      myCal = eval(myCal);

    } else {
      let lastChar = myCal.substring(myCal.length - 1);

      if (myOperators.includes(myVal)) {

        if (myOperators.includes(lastChar)) {
          myCal = myCal.substring(0, myCal.length - 1);
        } else {
          myCal = eval(myCal);
        }

      }
      myCal = myCal + myVal;
    }

    if(myVal=="C"){
      myCal ="0";
    }

    myOutput.innerText = myCal;
  }

});