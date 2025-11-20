let display=document.getElementById("display");
let up = document.getElementById("up");
let low = document.getElementById("low");
let capt = document.getElementById("capt");
let  redc= document.getElementById("redc");
let blcl = document.getElementById("blcl");
let grcl= document.getElementById("grcl");
let bigbtn = document.getElementById("bigbtn");
let smallbtn = document.getElementById("smallbtn");
let setag = document.getElementById("setag");

let currentFontSize = 1.5;
const initialText = textInput.value;
const initialSize = currentFontSize;
const initialColor = 'black';

function toUpperCase(){
  display.textContent=display.textContent.toUpperCase();
}
function toLowerCase(){
  display.textContent=display.textContent.toLowerCase();
}
function toCapitalize(){
  display.textContent=display.textContent.toCapitalize();
}

