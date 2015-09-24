var key = ["georgia tech", "yellow jackets", "justin thomas"];

var openPage = function (thread, url) {
	var win = window.open(url);
	win.focus();
}

var checkTitle = function (itemNum, itemDomEl) {
	var $thread = $(itemDomEl);
	var title = $thread.text();
	var url = $thread.attr("href");
	for (i = 0; i < key.length; i++) {
		if (title && title.toLowerCase().indexOf(key[i]) > 0) {
			openPage(title, url);
		}
	}
}

$("p.title a.title").each(checkTitle);