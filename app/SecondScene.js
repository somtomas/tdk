var $ = require("jquery");
var button = require("./Button.js");

module.exports = {

	setData: function(data) {
		var _this = this;
		
		_this.data = data;
	},

	html: function(first, second, third) {
		var _this = this;
		
		var $outer = $("<div></div>").attr("class", "video-outer");
	
		let $videorow = $("<div></div>")
		        .attr("class", "row video-row")
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/obrazok.png").attr("class", "video-png").click(_this.data[0])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/obrazok.png").attr("class", "video-png").click(_this.data[1])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/obrazok.png").attr("class", "video-png").click(_this.data[2])));
		
		$outer.append($videorow);
	
		let $btnrow = $("<div></div>")
		        .attr("class", "row video-row")
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").click(_this.data[0])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").click(_this.data[0])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").click(_this.data[0])));
		
		$outer.append($btnrow);
		
		return $outer;
	}
}