let bWindow = document.getElementById("breakWindow");
let returnTo = document.getElementById("back");


let linkBW = document.createElement("a");
let linkRT = document.createElement("a");
    

let textBW = document.createTextNode("Romper la puerta corrediza y entrar a la casa");
let textRT = document.createTextNode("Volver");
    

linkBW.href = "../page3/page3.html";
linkRT.href = "../page1/page1.html";

linkBW.appendChild(textBW);
linkRT.appendChild(textRT);
    

bWindow.appendChild(linkBW);
returnTo.appendChild(linkRT);


