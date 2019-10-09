var callbackData;
function get(url, code) {
	var script = document.createElement("SCRIPT");
	script.src = url;
	script.style = "display:none;"
	script.type = "text/javascript";
	script.onload = function() {
		var waitUntilExists = setInterval(function() {
			if (typeof callbackData === "undefined") {
				
			} else {
				code(callbackData);
				callbackData = undefined;
				clearInterval(waitUntilExists);
			}
		}, 1)

	}
	document.body.appendChild(script);
}

function callback(data) {
	callbackData = data;
}