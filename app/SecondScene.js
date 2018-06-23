var $ = require("jquery");
const remote = require('electron').remote;
var closeModal = require("./CloseModal.js")

module.exports = {

	setData: function(data) {
		var _this = this;
		
		_this.data = data;
	},

	html: function() {
		var _this = this;
		
		var $result = $("<div></div>");
		
		var $outer = $("<div></div>").attr("class", "video-outer");
	
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
		
		$outer.append($videorow);
		
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
		
		$outer.append($btnrow);
		
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
		
		$result.append($outer);
		$result.append($hiddenrow);
		$result.append(closeModal.html());
		
		$(window).resize(function () {
			if(window.innerHeight > window.innerWidth) {
				$hiddenrow.show();
				$outer.hide();
			} else {
				$hiddenrow.hide();
				$outer.show();
			}
		});
		if(window.innerHeight > window.innerWidth) {
			$hiddenrow.show();
			$outer.hide();
		} else {
			$hiddenrow.hide();
			$outer.show();
		}
	
		return $result;
	}
}