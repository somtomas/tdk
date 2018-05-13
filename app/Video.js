var $ = require("jquery");

module.exports = {

	setSrc: function(src, type) {
		var _this = this;
		
		_this.src = src;
		_this.type = type;
	},

	html: function() {
		var _this = this;
	
		return $("<video></video>")
				.append(
					$("<source></source>")
						.attr("src", _this.src)
						.attr("type", _this.type));
	
	}
}