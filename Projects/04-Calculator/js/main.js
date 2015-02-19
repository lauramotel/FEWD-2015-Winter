var $display;

$(document).ready(function() {
	
	$display = $(".display");

	$(".digit, .operator").on("click", onButtonPress);

});

//React to button press
function onButonPress(e) {
	var $button = $(e.currentTarget),
		action = $button.data("action"), //look for data-action=..." in HTML
		value = $display.val();

	if (value === "0") {
		value = action;
	} else {
		value += action;
	}

	updateDisplay(value);
}


//Evaluate user input

//Update display
function updateDisplay(value) {
	$display.val(value);
}

//Clear the current input

