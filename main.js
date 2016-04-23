window.onload=function(){
var elements=documents.getElementsByClassName("reveal");
for(var i=0; i<elements.length; i++{
var elt=elements[i];
var title=elt.getElementsByClassName("handle")[0];
addRevealHandler(title,elt);
}
function addRevealHandler(title,elt){
title.onclick=function(){
if(elt.className == "reveal")elt.className = "revealed";
else if (elt.Name == "revealed")elt.className = "reveal;"