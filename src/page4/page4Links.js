let explore = document.getElementById("explore");
let returnTo = document.getElementById("back");


let linkExplore = document.createElement("a");
let linkRT = document.createElement("a");
    

let textExplore = document.createTextNode("Explorar el segundo nivel");
let textRT = document.createTextNode("Volver");
    

linkExplore.href = "../altEnding/quitting.html";
linkRT.href = "../page3/page3.html";
    

linkExplore.appendChild(textExplore);
linkRT.appendChild(textRT);


explore.appendChild(linkExplore);
returnTo.appendChild(linkRT);

