// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var $ = require("jquery");
var video = require("./app/Video.js");
var secondScene = require("./app/SecondScene.js");
var quest = require("./app/Quest.js");

var toSecond = function() {
	$("#app").html("");
	$("#app").append(secondScene.html());
};

$("#landing").click(function() {

	video.setSrc("http://techslides.com/demos/sample-videos/small.mp4", "video/mp4");

	$("#app").html("");
	$("#app").append(
		quest.create(
			toSecond, 
			[["Odpoved 1 k otazke 1", "Odpoved 2 k toazke 1"],["Dalsia super odpoved", "Spravna odpoved", "Skusime odpoved cislo 3"],["Jednoducha odpoved", "Oznacena odpoved", "Odpoved 3"]]));
	
	
		//$("<div></div>").html("<video controls><source src= type=video/mp4></video>")
});
/*
var interval = setInterval(function() {
	alert("hello " + $("#landing").attr("src"));
	clearInterval(interval);
}, 5000);
*/