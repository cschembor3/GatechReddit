var key = 'https://t-square.gatech.edu/portal/site/gtc'

function openLinks() {
	for (i = 0; i < document.links.length; i++) {
		if (document.links[i].href.match(key)) {
			var win = window.open(document.links[i].href);
			win.focus();
		}
	}
}
//alert("Hi")
