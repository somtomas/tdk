var $ = require("jquery");
var closeModal = require("./CloseModal.js")
var modal = require("./Modal.js")

module.exports = {

	/**
	 * Set video attributes to instance
	 *
	 * @param src Video source
	 * @param type Video type - eg. mp4
	 * @param name Video name
	 */
	setSrc: function(src, type, name) {
		var _this = this;
		
		_this.src = src;
		_this.type = type;
		_this.name = name;
	},

	/** 
	 * Creates video screen with action buttons.
	 * Handling context of right and wrong answers from previous questionaires.
	 *
	 * @param menuAction Function delegate - call on menu button click
	 * @param questAction Function delegate - call on Continue button click
	 * @param right Context of all right answered questions from previous questionaires
	 * @param wrong Context of all wrong answered questions from previous questionaires
	 * @param name Image filename suffix
	 * @return jQuery object
	 */
	html: function(menuAction, questAction, wrong, right, name) {
		
		// method global instance context 
		var _this = this;
		
		// outer div
		var $outer = $("<div></div>").attr("class", "video-player-outer");
	
		// video tag with controls
		let $video = $("<video></video>").attr("controls", "true");
		
		// append source file to video from instance context
		$video.append(
			$("<source></source>")
						.attr("src", _this.src)
						.attr("type", _this.type))
				.attr("class", "video-player")
				.addClass("centered")
				.click(function() {
				
					// play / pause video on click on it
					if (this.paused == false) {
						this.pause();
					} else {
						this.play();
					}
				});
		
		// append video to outer div
		$outer.append($video);
		
		// menu action button -> would you like to finish testing?
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu").click(function() {
			modal.show("CHCETE UKONČIT TESTOVÁNI?", menuAction);
		});
		
		// append menu button with action to outer div
		$outer.append($menu);
		
		// video name + append to outer div
		let $name = $("<img>").attr("src", "img/nazev_" + name + ".png").attr("class", "video-name-absolute");
		$outer.append($name);
		
		// continue to questions button
		let $continue = $("<img>").attr("src", "img/button_modry.png").attr("class", "pokracovat").click(function() {
			questAction(wrong, right);
		});
		
		// append continue question to outer div
		$outer.append($continue);
		
		// append close modal window for application exit
		$outer.append(closeModal.html());
		
		// return jQuery object
		return $outer;
	}
}