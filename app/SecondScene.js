var $ = require("jquery");
var button = require("./Button.js");

module.exports = {

	html: function() {
		var _this = this;
	
		return $("<div></div>")
		        .attr("class", "row")
				.append(
					$("<div></div>")
						.attr("class", "col-sm-4")
						.html(button.html()))
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