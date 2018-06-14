// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var $ = require("jquery");
var video = require("./app/Video.js");
var secondScene = require("./app/SecondScene.js");
var quest = require("./app/Quest.js");
var success = require("./app/Success.js");
var questions = require("./app/QuestionsConst.js");

// menu screen showing
var toSecond = function() {
	$("#app").html("");
	$("#app").append(secondScene.html());
};

var toSuccess = function(wrong, right) {
	$("#app").html("");
	$("#app").append(success.html(toSecond, wrong, right));
};

var quest_3_2 = function(wrong, right) {
	$("#app").html("");
	$("#app").append(
		quest.create(toSecond, questions.quests_3_2, toSuccess, wrong, right));
};

var video_3_2 = function(wrong, right) {
	video.setSrc("video/ep50/proces2.mp4", "video/mp4", "NAZOV VIDEA CISLO 1");
	$("#app").html("");
	$("#app").append(video.html(toSecond, quest_3_2, wrong, right));
};

var quest_3_1 = function(wrong, right) {
	$("#app").html("");
	$("#app").append(
		quest.create(toSecond, questions.quests_3_1, video_3_2, wrong, right));
};

var video_3_1 = function() {
	video.setSrc("video/ep50/vyroba1.mp4", "video/mp4", "NAZOV VIDEA CISLO 1");
	$("#app").html("");
	$("#app").append(video.html(toSecond, quest_3_1, 0, 0));
};

// set menu actions
secondScene.setData([video_3_1, video_3_1, video_3_1]);

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