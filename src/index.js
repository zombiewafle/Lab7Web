//Se importan todos los elementos al bundle



import './page1/page1JS.js';
import './page1/page1Links.js';

import './page2/page2JS.js';
import './page2/page2Links.js';

import './page3/page3JS.js';
import './page3/page3Links.js';

import './page4/page4JS.js';
import './page4/page4Links.js';

import './altEnding/quitting.js';
import './end/end.js';

import  '../assets/bg.jpg';
import  '../assets/bg1.jpg';
import  '../assets/Font.ttf';

import './css/backgrounds.css';
import './css/progressBar.css';
import './css/style.css';
import './css/text.css';


//Creacion del body
let container = document.getElementById("container");

//Creacion de variables para los textos
let titulo = document.getElementById("Titulo");
let instrucciones = document.getElementById("instrucciones");



let opcionInicial = document.getElementById("startOption");
    
let text = document.createTextNode("Iniciar historia interactiva");
let link = document.createElement("a");

link.href = "./page1/page1.html";

link.appendChild(text);

opcionInicial.appendChild(link);

let hr = document.createElement("hr");

//var opcionInicial = document.getElementById("startOption");
//var text = document.createTextNode("Iniciar historia interactiva");
//var link = document.createElement("a");
//link.href = "page1.html"
//link.appendChild(text);
titulo.innerHTML = "Laboratorio No.7";
instrucciones.innerHTML = "Crear una historia interactiva, esta vez implementando lo aprendido en webpack y babel";
 
//opcionInicial.appendChild(link);
 
container.appendChild(titulo);
container.appendChild(instrucciones);
document.body.appendChild(hr);
document.body.appendChild(opcionInicial)