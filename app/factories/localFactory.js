"use strict";

app.factory("LocalFactory", () =>{

	let currentJSON = {};
	let currentCard = {};
	let currentDeck = {};
	let currentCardList = {};

	let getCurrentCard = () => {
		return currentCard;
	};

	let setCurrentCard = (something) => {
		currentCard = something;
	};
	
	let getCurrentJSON = () => {
		return currentJSON;
	};

	let setCurrentJSON = (something) => {
		currentJSON = something;
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


return {setCurrentCardList, getCurrentCardList,setCurrentDeck, getCurrentDeck, setCurrentJSON, getCurrentJSON, setCurrentCard, getCurrentCard};

});