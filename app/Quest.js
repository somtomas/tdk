var $ = require("jquery");

module.exports = {

	// return question mark
	img: function() {
		var _this = this;
		_this.counter = _this.counter + 1;
		var address = "img/cislo" + _this.counter + ".png";
		return $("<img>").attr("src", address).attr("class", "cislo");
	},
	
	// returns bootstrap cell with specific bootstrap width
	cell: function(bootstrapWidth) {
		return $("<div></div>").attr("class", "col-md-" + bootstrapWidth);
	},
	
	// return question with choices and logic
	quest: function(obj) {
		var _this = this;
		var  $outer = $("<div></div>").attr("class", "quest");
		
		var logic = function() {
			console.log(this);
			$("p", $(this).parent()).removeClass("selected");
			$(this).addClass("selected");
		}
		
		$outer.append($("<h4></h4>").text(obj.quest).attr("class", "question"));
		
		for(var val of obj.answers) {
			let $span = $("<p></p>").text(val).click(logic);
			$outer.append($span);
		}
		
		return $outer;
	},

	create: function(menuAction, quests) {
		var _this = this;
		
		_this.counter = 0;
		
		var $outer = $("<div></div>").attr("class", "quest-outer");
	
		for(var val of quests) {
			let $row = $("<div></div>").attr("class", "row");
		
			let $cell = _this.cell(2);
			$cell.append(_this.img());
			$row.append($cell);
			
			$cell = _this.cell(10);
			$cell.append(_this.quest(val));
			$row.append($cell);
			
			$outer.append($row);
		}
		let $continue = $("<img>").attr("src", "img/button_pokracovat.png").attr("class", "pokracovat");
		$outer.append($continue);
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu").click(menuAction);
		$outer.append($menu);
		
		return $outer;
	}
}