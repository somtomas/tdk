// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var $ = require("jquery");
var video = require("./app/Video.js");
var secondScene = require("./app/SecondScene.js");
var quest = require("./app/Quest.js");

var quests_1_1 = [{
	quest: "How far is from Earth to Moon?",
	answers: ["12km", "approx. 350 000km", "3125km", "0.98 light years"],
	right: 1
}, {
	quest: "How far is from KNM to ZA?",
	answers: ["10.95 km", "11.6 km", "9.8 km", "14 light years"],
	right: 3
}];

// menu screen showing
var toSecond = function() {
	$("#app").html("");
	$("#app").append(secondScene.html());
};

// first questionaire
var quest_1_1 = function() {
	$("#app").html("");
	$("#app").append(
		quest.create(toSecond, quests_1_1));
};

// first video
var video_1_1 = function() {
	video.setSrc("video/ep50/chyby.mp4", "video/mp4", "NAZOV VIDEA CISLO 1");
	$("#app").html("");
	$("#app").append(video.html(toSecond, quest_1_1));
};

// set menu actions
secondScene.setData([video_1_1, video_1_1, video_1_1]);

$("#landing").click(function() {

	toSecond();
	
		//$("<div></div>").html("<video controls><source src= type=video/mp4></video>")
});
/*
var interval = setInterval(function() {
	alert("hello " + $("#landing").attr("src"));
	clearInterval(interval);
}, 5000);
*/