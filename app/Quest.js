var $ = require("jquery");
const RIGHT_ANSWER = "CONST_RA";
var closeModal = require("./CloseModal.js")
var modal = require("./Modal.js")

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
		return $("<div></div>").attr("class", "col-lg-" + bootstrapWidth);
	},
	
	// return question with choices and logic
	quest: function(obj) {
		var _this = this;
		var  $outer = $("<div></div>").attr("class", "quest");
		
		var logic = function() {
			$("label", $(this).parent().parent().parent()).removeClass("selected");
			$(this).parent().addClass("selected");
		}
		
		$outer.append($("<h4></h4>").html(obj.quest).attr("class", "question"));
		var scale = "scale(" + (window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight) / 600 + ")";
		
		for(var i = 0; i < obj.answers.length; i++) {
		
			let $input = $("<input/>")
				.attr("type", "radio")
				.attr("name", "optradio" + _this.counter)
				.css("transform", scale)
				.change(logic);
				
			$(window).resize(function() {
				let scaleInner = "scale(" + (window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight) / 600 + ")";
				$("input[type=radio]").css("transform", scaleInner)
			});
		
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
		
			if (_this.right === 4 && $(".pokracovat").attr("src") !== "img/button_zeleny.png") {
				$(".pokracovat").attr("src", "img/button_zeleny.png");
			} else {
				continueAction(_this.commingWrong + _this.wrong, _this.commingRight + _this.right);
			}
		
			//console.log("otazky odosielaju: wrong(" + (_this.commingWrong + _this.wrong) + "), right(" + (_this.commingRight + _this.right) + ")");
		} else if (_this.wrong > 0) {
			let $w = $(".pokracovat");
			$w.css("width", $w.width() + "px").attr("src", "img/button_cerveny.png");
			$w.addClass("pokracovat-cerveny");
			$w.removeClass("pokracovat");
		}
	},

	create: function(menuAction, quests, continueAction, wrong, right, name) {
		var _this = this;
		
		_this.counter = 0;
		_this.wrong = 0;
		_this.right = 0;
		_this.commingWrong = wrong || 0;
		_this.commingRight = right || 0;
		
		var $outer = $("<div></div>").attr("class", "quest-outer");
	
		for (var val of quests) {
		
			let $row = $("<div></div>").attr("class", "row hidden-img");
		
			if (window.innerHeight > window.innerWidth) {
				$row.show();
			} else {
				$row.hide();
			}
			
			let $img = _this.img();
		
			let $cell = _this.cell(2);
			$cell.append($img);
			$row.append($cell);
			
			$outer.append($row);
			
			$row = $("<div></div>").attr("class", "row");
		
			$cell = _this.cell(2);
			$cell.append($img.clone(true, true));
			$row.append($cell);
			
			$cell = _this.cell(10);
			$cell.append(_this.quest(val));
			$row.append($cell);
			
			$outer.append($row);
		}
		let $continue = $("<img>").attr("src", "img/button_modry.png").attr("class", "pokracovat").click(function() { _this.pokracovat(quests, continueAction);});
		$outer.append($continue);
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu").click(function() {
			modal.show("CHCETE UKONČIT TESTOVÁNI?", menuAction);
		});
		$outer.append($menu);
		
		$(window).resize(function() {
			if (window.innerHeight > window.innerWidth) {
				$(".hidden-img").show();
			} else {
				$(".hidden-img").hide();
			}
		});
		
		if (window.innerHeight > window.innerWidth) {
			$(".hidden-img").show();
		} else {
			$(".hidden-img").hide();
		}
		
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
		
		let $name = $("<img>").attr("src", "img/nazev_" + name + ".png").attr("class", "video-name-absolute quest-name");
		$outer.append($name);
		*/
		
		$outer.append(closeModal.html());
		
		return $outer;
	}
}