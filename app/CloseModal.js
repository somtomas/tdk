const $ = require("jquery");
var closeModal = require("./Modal.js")
const remote = require('electron').remote;

module.exports = $.extend(closeModal, {

	html: function() {
		var _this = this;
		
		let $xko = $("<img>").attr("src", "img/xko.png").attr("class", "xko").on('click', e => {
			_this.show("CHCETE UKONČIT APLIKACI?", function() {
				remote.getCurrentWindow().close();
			});
		});
	
		return $xko;
	}
});