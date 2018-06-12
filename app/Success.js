var $ = require("jquery");

module.exports = {

	html: function(click) {
		var _this = this;
	
		return $("<img>").attr("src", "img/5_scena.png").css("width", "100%").click(click);
	}
}