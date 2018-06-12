// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var $ = require("jquery");
var video = require("./app/Video.js");
var secondScene = require("./app/SecondScene.js");
var quest = require("./app/Quest.js");
var success = require("./app/Success.js");

var quests_1_1 = [{
	quest: "Z jakých hlavních částí se skládá výrobní zařízení EP50?",
	answers: ["a)	zařízení lisu s ovládáním, nakládací automat s ovládáním, dopravníkový pás", "b)	zařízení lisu s ovládáním, dopravníkový pás, násypník se svodem", "c)	zařízení lisu s ovládáním, nakládací automat s ovládáním, dopravníkový pás, násypka se zvodem materiálu"],
	right: 2
}, {
	quest: "Jako začíná proces výroby na zařízení EP50?",
	answers: ["a)	naplněním matrice materiálem", "b)	výběrem přesného tipu produktu podle zadaného receptu", "c)	ručním naplněním násypníku materiálem"],
	right: 1
}, {
	quest: "Z jakých hlavních častí se skládá lisovací zařízení?",
	answers: ["a)	plnící bota, filomatika, odsávaní, matrice, horní a dolní razník upnutý ve stroji", "b)	plnící bota, matrice, horní a dolní razník upnutý v adaptéru", "c)	matrice, karusel, filomatika, horní a dolní razník upnutý ve stroji"],
	right: 1
}, {
	quest: "K čemu slouží plnící bota?",
	answers: ["a)	plnění matrice materiálem a posun výlisků na dráhu", "b)	pře naplněni násypky materiálem", "c)	posyp výlisků zirkonem"],
	right: 1
}];

// menu screen showing
var toSecond = function() {
	$("#app").html("");
	$("#app").append(secondScene.html());
};

var toSuccess = function() {
	$("#app").html("");
	$("#app").append(success.html(toSecond));
};

// first questionaire
var quest_1_1 = function() {
	$("#app").html("");
	$("#app").append(
		quest.create(toSecond, quests_1_1, toSuccess));
};

// first video
var video_1_1 = function() {
	video.setSrc("video/ep50/vyroba1.mp4", "video/mp4", "NAZOV VIDEA CISLO 1");
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