const $ = require("jquery");

module.exports = {

	show: function(text, action) {
	
		// Get the modal
		var modal = document.getElementById('myModal');
		var closeApp = document.getElementById('closeApp');
		var cancelApp = document.getElementById('cancelApp');
		
		closeApp.onclick = function(e) {
			modal.style.display = "none";
			action();
		}
		
		cancelApp.onclick = function(e) {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	
		$("#modalHeader").text(text);
		modal.style.display = "block";
	}
}