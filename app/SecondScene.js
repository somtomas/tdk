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
						.html($("<img>").attr("src", "img/nahlad_1_ep50.png").attr("class", "video-png").click(_this.data[0])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/nahlad_1.png").attr("class", "video-png").click(_this.data[1])))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4 video-cell")
						.html($("<img>").attr("src", "img/obrazok_2.png").attr("class", "video-png").click(_this.data[2])));
		
		$outer.append($videorow);
		
		var sh = screen.availHeight;
		let nh = parseInt(sh / 10);
		let bh = parseInt(sh / 5);
		
		let $namerow = $("<div></div>")
		        .attr("class", "name-row")
				.append($("<div></div>")
					.attr("class", "row")
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 name-cell")
							.html($("<img>").attr("src", "img/nazev_EP50.png").attr("class", "name-png").css("height", nh + "px").click(_this.data[0])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 name-cell")
							.html($("<img>").attr("src", "img/nazev_p1000.png").attr("class", "name-png").css("height", nh + "px").click(_this.data[0])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 name-cell")
							.html($("<img>").attr("src", "img/nazev_tpa6.png").attr("class", "name-png").css("height", nh + "px").click(_this.data[0]))));
		
		$outer.append($namerow);
	
		let $btnrow = $("<div></div>")
		        .attr("class", "video-row")
				.append($("<div></div>")
					.attr("class", "row")
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 video-cell")
							.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").css("height", bh + "px").click(_this.data[0])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 video-cell")
							.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").css("height", bh + "px").click(_this.data[0])))
					.append(
						$("<div></div>")
							.attr("class", "col-sm-4 video-cell")
							.html($("<img>").attr("src", "img/spustit_plne.png").attr("class", "spustit-png").css("height", bh + "px").click(_this.data[0]))));
		
		$outer.append($btnrow);
		
		return $outer;
	}
}