// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var $ = require("jquery");
var video = require("./app/Video.js");
var secondScene = require("./app/SecondScene.js");

$("#landing").click(function() {

	video.setSrc("http://techslides.com/demos/sample-videos/small.mp4", "video/mp4");

	$("#app").html("");
	//$("#app").append(video.html());
	$("#app").append(secondScene.html());
	
	
		//$("<div></div>").html("<video controls><source src= type=video/mp4></video>")
});
/*
var interval = setInterval(function() {
	alert("hello " + $("#landing").attr("src"));
	clearInterval(interval);
}, 5000);
*/