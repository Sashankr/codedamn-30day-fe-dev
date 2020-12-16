let title = document.getElementById("title");
title.innerHTML = "<i>SELECTORS</i>";

let para = document.getElementsByClassName("para");
para[0].innerHTML = "para 1";
para[1].innerHTML = "para 2";

let section = document.getElementsByTagName("section");
section[0].innerText="This is a section";

document.head.getElementsByTagName("title")[0].innerText="Changed title";
