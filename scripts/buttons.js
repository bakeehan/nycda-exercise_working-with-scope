// Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"

var argueOne = document.getElementById("argueOne");
var argueTwo = document.getElementById("argueTwo");
var arguements = document.getElementsByClassName("argue");

argueOne.addEventListener("click", function(){
	arguements[0].innerHTML = "I'm right!";
	arguements[1].innerHTML = "";
})

argueTwo.addEventListener("click", function(){
	arguements[0].innerHTML = "";
	arguements[1].innerHTML = "No, I'm right!";
})