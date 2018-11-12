chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		let contributionMessage = "Let's not count contributions!"
		document.getElementsByClassName("text-normal mb-2")[1].innerHTML = contributionMessage;
		let contribLegend = '<div class="contrib-legend text-gray" title="A summary of pull requests, issues opened, and commits to the default and gh-pages branches.">Less<ul class="legend"><li style="background-color: #196127"></li><li style="background-color: #196127"></li><li style="background-color: #196127"></li><li style="background-color: #196127"></li><li style="background-color: #196127"></li></ul>More</div>'
		document.getElementsByClassName("contrib-legend text-gray")[0].innerHTML = contribLegend;

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		//alert("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});