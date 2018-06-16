var $ = require("jquery");
var RIGHT_ANSWER = "CONST_RA";

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
			$("label", $(this).parent().parent().parent()).removeClass("selected");
			$(this).parent().addClass("selected");
		}
		
		$outer.append($("<h4></h4>").text(obj.quest).attr("class", "question"));
		var scale = "scale(" + window.innerHeight / 600 + ")";
		
		for(var i = 0; i < obj.answers.length; i++) {
		
			let $input = $("<input/>")
				.attr("type", "radio")
				.attr("name", "optradio" + _this.counter)
				.css("transform", scale)
				.change(logic);
		
			if(obj.right === i) {
				$input.attr("class", RIGHT_ANSWER);
			}
		
			let val = obj.answers[i];
			let $span = $("<div></div>")
				.addClass("radio")
				.append($("<label></label>")
					.append($input)
					.append(val));
			$outer.append($span);
		}
		
		return $outer;
	},
	
	pokracovat: function(quests, continueAction) {
		var _this = this;
	
		var $qs = document.querySelectorAll(".quest");
		for(var i = 0; i < quests.length; i++) {
			let obj = quests[i];
			
			$ra = $("input", $(".selected", $qs[i]));
			
			if(!$ra.length) {
				continue;
			}
			
			if($ra.hasClass(RIGHT_ANSWER)) {
				$("input", $ra.parent().parent().parent()).attr("disabled", "disabled");
				$("label", $ra.parent().parent().parent()).addClass("disabled");
				$("h4", $ra.parent().parent().parent()).addClass("disabled");
				
				if($ra.parent().parent().parent().not(".answered").length) {
					$ra.parent().parent().parent().addClass("answered");
					_this.right++;
				}
			} else {
				if($ra.parent().parent().parent().not(".answered").length) {
					$ra.parent().parent().parent().addClass("answered");
					_this.wrong++;
				}
				$ra.parent().addClass("quest-wrong");
			}
			
			$("." + RIGHT_ANSWER, $qs[i]).parent().addClass("quest-right");
		}
		/*
		if (wrong) {
			$(".pokracovat a").css("background-image", "url(\"../img/button_cerveny.png\");");
		}*/
		if ((_this.wrong + _this.right) === 4 && !$("h4").not(".disabled").length) {
			//console.log("otazky odosielaju: wrong(" + (_this.commingWrong + _this.wrong) + "), right(" + (_this.commingRight + _this.right) + ")");
			continueAction(_this.commingWrong + _this.wrong, _this.commingRight + _this.right);
		} else {
			let $w = $(".pokracovat");
			$w.css({ "width": $w.width() + "px", "height": "" }).attr("src", "img/button_cerveny.png");
		}
	},

	create: function(menuAction, quests, continueAction, wrong, right) {
		var _this = this;
		
		_this.counter = 0;
		_this.wrong = 0;
		_this.right = 0;
		_this.commingWrong = wrong || 0;
		_this.commingRight = right || 0;
		
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
		let $continue = $("<img>").attr("src", "img/button_pokracovat.png").attr("class", "pokracovat").click(function() { _this.pokracovat(quests, continueAction);});
		$outer.append($continue);
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu").click(menuAction);
		$outer.append($menu);
		
		/*
		let img = new Image();
		img.onload = function() {
		
			let $a = $("<a></a>");
			let pomer = this.height / 2 / (window.innerHeight / 10);
			let w = this.width / pomer + "px";
			let $continue = $("<div></div>").attr("class", "pokracovat").css("width", w).click(function() { _this.pokracovat(quests, continueAction);})
				.append($a);
			let futurePos = "0 " + (this.height / pomer / 2) + "px";
			$a.hover(function() {
				$(this).css("background-position", futurePos);
			}, function() {
				 $(this).css("background-position", "0 0");
			});
				//background-position
			$outer.append($continue);
		}
		img.src = 'img/button_pokracovat_modry.png';
		*/
		return $outer;
	}
}