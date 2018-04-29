// Create an HTML page with javascript that listens for a keypress.
// When the user presses that key, the text of the h1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the h1 should be "J".

var typeSpace = document.getElementById("typeSpace");
var typeLabel = document.getElementById("typeLabel");

window.addEventListener("keypress", function(event){
	typeLabel.innerHTML = "";
	typeSpace.innerHTML += event.key;
})