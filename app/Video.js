var $ = require("jquery");

module.exports = {

	setSrc: function(src, type, name) {
		var _this = this;
		
		_this.src = src;
		_this.type = type;
		_this.name = name;
	},

	html: function(menuAction, questAction) {
		var _this = this;
		
		var $outer = $("<div></div>").attr("class", "video-player-outer");
		
		let $name = $("<p></p>").attr("class", "video-player-name").text(_this.name);
		$outer.append($name);
	
		let $video = $("<video></video>")
				.append(
					$("<source></source>")
						.attr("src", _this.src)
						.attr("type", _this.type))
				.attr("class", "video-player")
				.click(function() {
					if (this.paused == false) {
						this.pause();
					} else {
						this.play();
					}
				});
		
		$outer.append($video);
		
		let $continue = $("<img>").attr("src", "img/button_pokracovat.png").attr("class", "pokracovat").click(questAction);
		$outer.append($continue);
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu").click(menuAction);
		$outer.append($menu);
		
		return $outer;
	}
}