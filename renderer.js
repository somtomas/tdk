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



// success screen
var toSuccess = function(wrong, right) {
	$("#app").html("");
	$("#app").append(success.html(toSecond, wrong, right));
};


// creates video + question screen
var createSequencePart = function(questions, continuePoint, videoSrc, name) {
	
	// create question screen
	let q = function(wrong, right) {
		$("#app").html("");
		$("#app").append(quest.create(toSecond, questions, continuePoint, wrong, right, name));
	};

	// creates video screen and fill if with question event
	let v = function(wrong, right) {
		video.setSrc(videoSrc, "video/mp4");
		$("#app").html("");
		
		// first run
		if (typeof wrong !== "number") {
			wrong = 0;
		}
		
		$("#app").append(video.html(toSecond, q, wrong || 0, right || 0, name));
	};
	
	return v;
};




// creates teaching sequence - 4x video + questions
var createSequence = function(videoFolder, questPrefix, name) {

	// sequence must be created from back
	var videoSequence = ["chyby", "meranie", "proces2", "proces1"];
	
	// remember last screen
	var last = toSuccess;
	
	// for all types of videos
	for (var i = 0; i < 4; i++) {
	
		// inner variables
		let q = questions[questPrefix + (4 - i)];
		let v = "video/" + videoFolder + "/" + videoSequence[i] + ".mp4";

		// save last screen as continue point for earlier screens
		last = createSequencePart(q, last, v, name);
	}
	
	// return last screen as first point of sequence
	return last;
};



// set menu actions
secondScene.setData([
	createSequence("ep50", "quests_3_", "EP50"),
	createSequence("p1000", "quests_1_", "p1000"),
	createSequence("tpa6", "quests_2_", "tpa6")
]);




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