var $ = require("jquery");

module.exports = {

	html: function() {
		var _this = this;
	
		return $("<div></div>")
		        .attr("class", "row")
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4")
						.text("hello 1"))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4")
						.text("hello 2"))
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4")
						.text("hello 3"));
	
	}
}