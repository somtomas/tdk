var $ = require("jquery");
const remote = require('electron').remote;
var closeModal = require("./CloseModal.js")

module.exports = {

	/** 
	 * Save context data to object instance
	 *
	 * @param data Array handling function delegates for menu choice
	 */
	setData: function(data) {
		var _this = this;
		
		// saving data into instance context
		_this.data = data;
	},

	/**
	 * Creates HTML data.
	 *
	 * @return jQuery object
	 */
	html: function() {
		var _this = this;
		
		// outer div
		var $result = $("<div></div>");
		
		// div for horizontal screen rotation
		var $outer = $("<div></div>").attr("class", "video-outer");
	
		// row with video insight
		let $videorow = $("<div></div>")
		        .attr("class", "row video-row")
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/p1000_nahlad.png").attr("class", "video-png").click(_this.data[1])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/tpa6_nahlad.png").attr("class", "video-png").click(_this.data[2])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/ep50_nahlad.png").attr("class", "video-png").click(_this.data[0])));
		
		// append into horizontal screen rotation div
		$outer.append($videorow);
		
		// buttons
		let $btnrow = $("<div></div>")
		        .attr("class", "video-row")
				.append($("<div></div>")
					.attr("class", "row")
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 video-cell")
							.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").click(_this.data[1])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 video-cell")
							.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").click(_this.data[2])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 video-cell")
							.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").click(_this.data[0]))));
		
		// append into horizontal screen rotation div
		$outer.append($btnrow);
		
		// div for vertical screen rotation
		let $hiddenrow = $("<div></div>")
				.attr("id", "hiddenrow")
				.append($("<div></div>")
					.attr("class", "row")
					.append(
						$("<div></div>")
							.attr("class", "col-sm-12 video-cell")
							.html($("<img>").attr("src", "img/p1000_resp.png").attr("class", "spustit-png").click(_this.data[1])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-12 video-cell")
							.html($("<img>").attr("src", "img/tpa6_resp.png").attr("class", "spustit-png").click(_this.data[2])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-12 video-cell")
							.html($("<img>").attr("src", "img/ep50_resp.png").attr("class", "spustit-png").click(_this.data[0]))));
		
		// add horizontal screen rotation div
		$result.append($outer);
		
		// add vertical screen rotation div
		$result.append($hiddenrow);
		
		// add application exit button with modal screen
		$result.append(closeModal.html());
		
		// responsive design is handled by window resize event
		// it change visibility of entire body - its beacause body is based on picture menu
		$(window).resize(function () {
		
			// if screen rotation
			if(window.innerHeight > window.innerWidth) {
				$hiddenrow.show();
				$outer.hide();
			} else {
				$hiddenrow.hide();
				$outer.show();
			}
		});
		
		// check rotation at screen start
		if(window.innerHeight > window.innerWidth) {
			$hiddenrow.show();
			$outer.hide();
		} else {
			$hiddenrow.hide();
			$outer.show();
		}
	
		// return jQuery object
		return $result;
	}
}