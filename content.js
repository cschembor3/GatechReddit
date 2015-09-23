var key = 'https://t-square.gatech.edu/portal/site/gtc'
//var key = "mail"
function openLinks() {
	var tracker = [];
	var checker = 0;
	for (i = 0; i < document.links.length; i++) {
		if (document.links[i].href.match(key)) {
			for (j = 0; j < tracker.length; j++) {
				if (document.links[i].href === (tracker[j])) {
					alert(checker);
					checker++;
				}
			}
			if (checker == 0) {
				tracker.push(document.links[i].href);
				var win = window.open(document.links[i].href);
				win.focus();	
			}
		}
	}
}

//alert(document.links.length)
window.onload = openLinks();
