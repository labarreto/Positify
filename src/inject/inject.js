chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var textNodes = [];
		(function walkNodeForText(node) {
			if (node) {
				node = node.firstChild;
				while (node !=null) {
					switch (node.nodeType) {
						case 1:
						case 9:
						case 11:
						walkNodeForText(node);
						break;
						case 3:
						textNodes.push(node);
						break;
					}

					node = node.nextSibling;
				}
			}
		}) (document.body);
		textNodes.forEach(function(currentVal, index, array) {
			//** these are all the words that will be replaced with POSITIVITY :) 
			//** TRIGGER WARNING, profanity ahead

			// verbs
			// nouns
			// adjectives
			
			currentVal.nodeValue = currentVal.nodeValue.replace(/stupid/gi, "brilliant");
			currentVal.nodeValue = currentVal.nodeValue.replace(/dumb/gi, "smart");
			currentVal.nodeValue = currentVal.nodeValue.replace(/not/gi, "");
			currentVal.nodeValue = currentVal.nodeValue.replace(/don't/gi, "");
			
			
			currentVal.nodeValue = currentVal.nodeValue.replace(/bitch/gi, "admirable human being");
			currentVal.nodeValue = currentVal.nodeValue.replace(/fuck/gi, "yay");
			currentVal.nodeValue = currentVal.nodeValue.replace(/idiot/gi, "clever");


			currentVal.nodeValue = currentVal.nodeValue.replace(/bastard/gi, "dear friend");
			currentVal.nodeValue = currentVal.nodeValue.replace(/hate/gi, "love");
			currentVal.nodeValue = currentVal.nodeValue.replace(/ass/gi, "sun"
			currentVal.nodeValue = currentVal.nodeValue.replace(/whore/gi, "delight");
			currentVal.nodeValue = currentVal.nodeValue.replace(/cunt/gi, "person not defined by your body parts");

			//** positivity!!
			currentVal.nodeValue = currentVal.nodeValue.replace(/fat/gi, "beautiful");
			currentVal.nodeValue = currentVal.nodeValue.replace(/retard/gi, "cool kid");
			currentVal.nodeValue = currentVal.nodeValue.replace(/retarded/gi, "intelligent");
			currentVal.nodeValue = currentVal.nodeValue.replace(/die/gi, "LIVE YOUR LIFE TO THE FULLEST");
			currentVal.nodeValue = currentVal.nodeValue.replace(/kill/gi, "HUG");
			currentVal.nodeValue = currentVal.nodeValue.replace(/suck/gi, "")

		});

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});