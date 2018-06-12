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
		
		//let $name = $("<p></p>").attr("class", "video-player-name").text(_this.name);
		//$outer.append($name);
	
		let $video = $("<video></video>");
		let $play = $("<img>").attr("src", "img/play.png").attr("class", "video-play-absolute")
				.click(function() {
					let $v = $video[0];
					/*console.log($v);
					console.log($video[0]);
					console.log($video.html());
					*/
					if ($v.paused == false) {
						$(".video-play-absolute").attr("src", "img/play.png");
						$v.pause();
					} else {
						$(".video-play-absolute").attr("src", "img/stop.png");
						$v.play();
					}
				});
				
		$video.append(
					$("<source></source>")
						.attr("src", _this.src)
						.attr("type", _this.type))
				.attr("class", "video-player")
				.click(function() {
					if (this.paused == false) {
						$(".video-play-absolute").attr("src", "img/play.png");
						this.pause();
					} else {
						$(".video-play-absolute").attr("src", "img/stop.png");
						this.play();
					}
				});
		
		$outer.append($video);
		
		let $continue = $("<img>").attr("src", "img/button_pokracovat.png").attr("class", "pokracovat").click(questAction);
		$outer.append($continue);
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu").click(menuAction);
		$outer.append($menu);
		let $name = $("<img>").attr("src", "img/nazev_EP50.png").attr("class", "video-name-absolute");
		$outer.append($name);
		$outer.append($play);
		
		return $outer;
	}
}