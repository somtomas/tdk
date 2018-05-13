var $ = require("jquery");

module.exports = {

	html: function() {
		var _this = this;
	
		return $("<div></div>")
		        .attr("class", "run-btn");
	
	}
}