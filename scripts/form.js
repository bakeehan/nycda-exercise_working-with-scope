// Create an HTML page with a form. The form should include inputs for a username, password, an h1 tag as well as a button. In a Javascript file, write code that does the following things when the button is pressed:
// checks that the password is 12345678
// checks that the username is less than 14 characters in length
// if the info in the form is correct, have Javascript change the text in the h1 to say "Congrats on knowing your username and password!"
// if anything is wrong, send an alert message saying "Incorrect username or password"

var form = document.getElementById("formIs");
var input = document.getElementById("formGo");
var output = document.getElementById("resolution");

input.addEventListener("click", function() {
	if (form.elements[1].value == "12345678" && form.elements[0].value.length >= 14) {
		output.innerHTML = "Congrats on knowing your username and password!";
	} else {
		output.innerHTML = "Incorrect username or password";
	}
})