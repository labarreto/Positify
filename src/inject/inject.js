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

			//** WARNING, profanity ahead!!!!


			// fighting body shaming
			currentVal.nodeValue = currentVal.nodeValue.replace(/fat/gi, "beautiful");
			currentVal.nodeValue = currentVal.nodeValue.replace(/obese/gi, "stunning");
			currentVal.nodeValue = currentVal.nodeValue.replace(/overweight/gi, "amazing")
			currentVal.nodeValue = currentVal.nodeValue.replace(/dump/gi, "hip");

			
			// general
			currentVal.nodeValue = currentVal.nodeValue.replace(/fuck/gi, "walk");
			currentVal.nodeValue = currentVal.nodeValue.replace(/hate/gi, "love");
			currentVal.nodeValue = currentVal.nodeValue.replace(/ass/gi, "happy");
			currentVal.nodeValue = currentVal.nodeValue.replace(/damn/gi, "peanut butter and jam");
			currentVal.nodeValue = currentVal.nodeValue.replace(/die/gi, "LIVE YOUR LIFE TO THE FULLEST");
			currentVal.nodeValue = currentVal.nodeValue.replace(/kill/gi, "HUG");
			currentVal.nodeValue = currentVal.nodeValue.replace(/suck/gi, "cook")
			currentVal.nodeValue = currentVal.nodeValue.replace(/not/gi, "");
			currentVal.nodeValue = currentVal.nodeValue.replace(/ifications/gi, "notifications");

			currentVal.nodeValue = currentVal.nodeValue.replace(/don't/gi, "");
			currentVal.nodeValue = currentVal.nodeValue.replace(/crap/gi, "apple pie ");
			currentVal.nodeValue = currentVal.nodeValue.replace(/dead/gi, "very much alive");

			currentVal.nodeValue = currentVal.nodeValue.replace(/whatthehack/gi, "HAPPY HACKING AT UNHACKATHON");
			currentVal.nodeValue = currentVal.nodeValue.replace(/boo/gi, "yay");




			// fighting gender-specific derogatory terms
			currentVal.nodeValue = currentVal.nodeValue.replace(/whore/gi, "delight");
			currentVal.nodeValue = currentVal.nodeValue.replace(/cunt/gi, "papaya");
			currentVal.nodeValue = currentVal.nodeValue.replace(/clit/gi, "unicorn");
			currentVal.nodeValue = currentVal.nodeValue.replace(/tits/gi, "fruit");
			currentVal.nodeValue = currentVal.nodeValue.replace(/hoe/gi, "long-handled gardening tool used for breaking up soil");
			currentVal.nodeValue = currentVal.nodeValue.replace(/bitch/gi, "admirable human being");
			currentVal.nodeValue = currentVal.nodeValue.replace(/MILF/gi, "BEST MOM EVER");
			currentVal.nodeValue = currentVal.nodeValue.replace(/pussy/gi, "kitty");
			currentVal.nodeValue = currentVal.nodeValue.replace(/slut/gi, "talented friend");
			currentVal.nodeValue = currentVal.nodeValue.replace(/piss/gi, "rainbow");
			currentVal.nodeValue = currentVal.nodeValue.replace(/dick/gi, "pasta");
			currentVal.nodeValue = currentVal.nodeValue.replace(/cock/gi, "chicken");
			currentVal.nodeValue = currentVal.nodeValue.replace(/douche/gi,"nice lunch ");
			currentVal.nodeValue = currentVal.nodeValue.replace(/cum/gi, "beer");
			currentVal.nodeValue = currentVal.nodeValue.replace(/anus/gi, "all");
			currentVal.nodeValue = currentVal.nodeValue.replace(/anal/gi, "chocolate");
			currentVal.nodeValue = currentVal.nodeValue.replace(/beef/gi, "shower");
			currentVal.nodeValue = currentVal.nodeValue.replace(/enegma/gi, "wine ");
			currentVal.nodeValue = currentVal.nodeValue.replace(/happyhole/gi, "happiness");
			currentVal.nodeValue = currentVal.nodeValue.replace(/blow/gi, "blow bubbles with ");
			currentVal.nodeValue = currentVal.nodeValue.replace(/shit/gi, "kangaroos");
			currentVal.nodeValue = currentVal.nodeValue.replace(/HAPPYociated/gi, "associated");

			




			// fighting descrimination
			currentVal.nodeValue = currentVal.nodeValue.replace(/fag/gi, "groot");
			currentVal.nodeValue = currentVal.nodeValue.replace(/grog/gi, "gro");
			currentVal.nodeValue = currentVal.nodeValue.replace(/bullshit/gi, "blueberry");
			currentVal.nodeValue = currentVal.nodeValue.replace(/gypsy/gi, "")
			
			// fighting ableism 
			currentVal.nodeValue = currentVal.nodeValue.replace(/retard/gi, "cool kid");
			currentVal.nodeValue = currentVal.nodeValue.replace(/retarded/gi, "intelligent");
			currentVal.nodeValue = currentVal.nodeValue.replace(/bastard/gi, "dear friend");
			currentVal.nodeValue = currentVal.nodeValue.replace(/stupid/gi, "brilliant");
			currentVal.nodeValue = currentVal.nodeValue.replace(/dumb/gi, "smart");
			currentVal.nodeValue = currentVal.nodeValue.replace(/idiot/gi, "clever");
			currentVal.nodeValue = currentVal.nodeValue.replace(/freak/gi, "intimidatingly perfect");



		});

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});