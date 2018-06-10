var $ = require("jquery");
var button = require("./Button.js");

module.exports = {

	html: function() {
		var _this = this;
		
		var $outer = $("<div></div>").attr("class", "video-outer");
	
		let $videorow = $("<div></div>")
		        .attr("class", "row video-row")
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/obrazok.png").attr("class", "video-png")))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/obrazok.png").attr("class", "video-png")))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/obrazok.png").attr("class", "video-png")));
		
		$outer.append($videorow);
	
		let $btnrow = $("<div></div>")
		        .attr("class", "row video-row")
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png")))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png")))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png")));
		
		$outer.append($btnrow);
		
		return $outer;
	}
}