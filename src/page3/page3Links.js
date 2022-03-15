let sFloor = document.getElementById("secondFloor");
let returnTo = document.getElementById("back");


let linkSF = document.createElement("a");
let linkRT = document.createElement("a");


let textSF = document.createTextNode("Ir al segundo nivel");
let textRT = document.createTextNode("Volver");


linkSF.href = "../page4/page4.html";
linkRT.href = "../page1/page1.html";


linkSF.appendChild(textSF);
linkRT.appendChild(textRT);

sFloor.appendChild(linkSF);
returnTo.appendChild(linkRT);
