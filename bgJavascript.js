var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

body.style.background = "linear-gradient(to right, RGB(0, 255, 0), RGB(255, 0, 0))"

function h3style() {css.textContent = body.style.background;}

function gradient() {
	body.style.background = 
	"linear-gradient(to right," + 
	color1.value +
	 "," + 
	 color2.value + 
	 ")";
	 h3style();}

h3style()

color1.addEventListener("input", gradient)

color2.addEventListener("input", gradient)