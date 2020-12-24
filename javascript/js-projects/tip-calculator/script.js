const button = document.querySelector("button");
const output = document.querySelector(".output");

button.innerHTML = "<b>ADD TIP</b>";

button.addEventListener("click", function () {
    const cost = document.querySelector("input");
    let tip = (cost.value * 0.15).toFixed(2);
    let message = `<h1>You should tip $${tip} on $${cost.value}</h1>`;
    output.innerHTML = message;
    output.style.color = "#fff";
    output.style.fontFamily = "Ubuntu";
})