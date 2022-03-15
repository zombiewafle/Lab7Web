
let mDoor = document.getElementById("mainDoor");
let hallway = document.getElementById("sideOfHouse");
let escape = document.getElementById("escape");

let linkDoor = document.createElement("a");
let linkHall = document.createElement("a");
let linkEscape = document.createElement("a");

let textDoor = document.createTextNode("Ir hacia la puerta principal");
let textHall = document.createTextNode("Seguir a un costado de la casa");
let textEsc = document.createTextNode("Huir");

linkDoor.href = "../page3/page3.html";
linkHall.href = "../page2/page2.html";
linkEscape.href = "../altEnding/quitting.html"

linkDoor.appendChild(textDoor);
linkHall.appendChild(textHall);
linkEscape.appendChild(textEsc);


mDoor.appendChild(linkDoor);
hallway.appendChild(linkHall);
escape.appendChild(linkEscape);
