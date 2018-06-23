var $ = require("jquery");
const remote = require('electron').remote;
var closeModal = require("./CloseModal.js")
var modal = require("./Modal.js")

module.exports = {

    html: function(click, wrong, right) {
        var _this = this;
        var $outer = $("<div></div>").attr("class", "quest-outer");
        var percents = parseInt(right/(wrong+right)*100);
        var pictureNameValue = parseInt((percents + 1000).toString().substr(1, 2));
        var pictureName = "img/" + pictureNameValue + "0_p.png";
        console.log(pictureName);

        let $continue = $("<img>").attr("src", "img/dalsi.png").attr("class", "pokracovat button-dalsi").click(click);
        $outer.append($continue);
		let $menu = $("<img>").attr("src", "img/button_menu.png").attr("class", "button-menu vysledok").click(function() {
			modal.show("CHCETE UKONČIT TESTOVÁNI?", click);
		});
        $outer.append($menu);
        let $name = $("<img>").attr("src", "img/gratulujeme.png").attr("class", "video-name-absolute vysledok gratulujeme");
        $outer.append($name);
        let $nameResp = $("<img>").attr("src", "img/gratulujeme_resp.png").attr("class", "gratulujeme-resp");
        $outer.append($nameResp);
        let $graph = $("<img>").attr("src", pictureName).attr("class", "centered graph-absolute");
        $outer.append($graph);
        let $percents = $("<div></div>").text(parseInt(right/(wrong+right)*100) + "%").addClass("percents-absolute");
        $outer.append($percents);

		$outer.append(closeModal.html());

        return $outer;
    }
}