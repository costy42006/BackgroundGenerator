var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("genButton");


function setRandomGradient(){
    var r1 = Math.floor(Math.random() * 256);
    var g1 = Math.floor(Math.random() * 256);
    var b1 = Math.floor(Math.random() * 256);
    var r2 = Math.floor(Math.random() * 256);
    var g2 = Math.floor(Math.random() * 256);
    var b2 = Math.floor(Math.random() * 256);
    body.style.background = "linear-gradient(to right, rgb(" 
	+ r1 +", " + g1 +", " + b1
	+ "), rgb(" 
	+ r2 +", " + g2 +", " + b2 
	+ "))"
	css.textContent = body.style.background + ";";

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex1(r1, g1, b1) {
  return "#" + componentToHex(r1) + componentToHex(g1) + componentToHex(b1);
}
function rgbToHex2(r2, g2, b2) {
return "#" + componentToHex(r2) + componentToHex(g2) + componentToHex(b2);
}
var a1 = rgbToHex1(r1,g1,b1);
var a2 = rgbToHex2(r2,g2,b2);
document.getElementById("c1").value = a1;
document.getElementById("c2").value = a2;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);