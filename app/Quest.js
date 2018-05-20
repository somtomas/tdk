var $ = require("jquery");

module.exports = {

	img: function() {
		var _this = this;
		_this.counter = _this.counter + 1;
		var address = "img/cislo" + _this.counter + ".png";
		return $("<img>").attr("src", address).attr("class", "cislo");
	},
	
	cell: function(bootstrapWidth) {
		return $("<div></div>").attr("class", "col-md-" + bootstrapWidth);
	},
	
	quest: function(arr) {
		var _this = this;
		var  $outer = $("<div></div>").attr("class", "quest");
		
		var logic = function() {
			console.log(this);
			$("p", $(this).parent()).removeClass("selected");
			$(this).addClass("selected");
		}
		
		for(var val of arr) {
			let $span = $("<p></p>").text(val).click(logic);
			$outer.append($span);
		}
		
		return $outer;
	},

	create: function(arr) {
		var _this = this;
		
		_this.counter = 0;
		
		var $row = $("<div></div>").attr("class", "row");
	
		for(var val of arr) {	
			let $cell = _this.cell(2);
			$cell.append(_this.img());
			$row.append($cell);
			
			$cell = _this.cell(10);
			$cell.append(_this.quest(val));
			$row.append($cell);
		}
		
		return $row;
	}
}