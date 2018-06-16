var $ = require("jquery");

module.exports = {

	html: function(click, wrong, right) {
		var _this = this;
		
		var $outer = $("<div></div>").attr("class", "quest-outer");
		
		var percents = parseInt(right/(wrong+right)*100);
		var pictureNameValue = parseInt((percents + 1000).toString().substr(1, 2));
		var pictureName = "img/" + pictureNameValue + "0_p.png";
		console.log(pictureName);
		
		let $continue = $("<img>").attr("src", "img/dalsi.png").attr("class", "pokracovat").click(click);
		$outer.append($continue);
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu vysledok").click(click);
		$outer.append($menu);
		let $name = $("<img>").attr("src", "img/gratulujeme.png").attr("class", "video-name-absolute vysledok");
		$outer.append($name);
		let $graph = $("<img>").attr("src", pictureName).attr("class", "graph-absolute");
		$outer.append($graph);
		let $percents = $("<div></div>").text(parseInt(right/(wrong+right)*100) + "%").addClass("percents-absolute");
		$outer.append($percents);
	
		return $outer;
	}
}