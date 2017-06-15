"use strict";

app.factory("LocalFactory", () =>{


	let currentCard = {};
	let currentDeck = {};
	let currentCardList = {};

	let getCurrentCard = () => {
		return currentCard;
	};

	let setCurrentCard = (something) => {
		currentCard = something;
	};

	let getCurrentDeck = () => {
		return currentDeck;

	};

	let setCurrentDeck = (something) => {
		currentDeck = something;
	};

	let getCurrentCardList = () => {
		return currentCardList;

	};

	let setCurrentCardList = (something) => {
		currentCardList = something;
	};


return {};

});