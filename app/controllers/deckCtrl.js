"use strict";

app.controller("DeckCtrl", function($scope, $route, $document, $routeParams, $window, $location, CardStorage, LocalFactory){
	 $(document).ready(function(){
     console.log("this is a dropdown");
	  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
    }); 
     


	let intial = () => {
		let myStuff = LocalFactory.getCurrentJSON();
		console.log("myStuff, currentJSON", myStuff);
		$scope.currentLocalJSON = myStuff;
		// $scope.myPandaPants = myStuff;
		CardStorage.getDecks().then(function(data){
			console.log("im the data ", data);
			let deckPartialDeckArray = data.data;
			// let pandas = pantsArray.results;
			// let goodArray = [];
			// for (var i = 0; i < pandas.length; i++){
			// 	console.log("this is pandas", pandas[i]);
			// 	goodArray.push(pandas[i]);
			// }
			$scope.showMe = deckPartialDeckArray;
		});
};

	intial();

 $scope.cardObject = {

 };



	$scope.saveThisCard = (bla, deckObj ) =>{
		console.log("I'm running, and I'm save this card", bla);

		Materialize.toast('You saved it!', 500); // 4000 is the duration of the toast
		// console.log("stuff", bla, deckObj.id);
		let front = bla.left + " "+ bla.mid;
		let back = bla.right;
		let deck = deckObj;
		console.log("this is what you are trying to save", deck.id);
		let cardObject = {
			"front" : front,
			"back" : back,
			"deck" : parseInt(deck.id)
		};

		CardStorage.postCard(cardObject).then(function(stuff){
			console.log(cardObject);
			console.log("we did it", stuff);
		});


	};

 	
	$scope.deleteThisCard = (cardId) =>{
		console.log("heres the id", cardId);
		CardStorage.deleteCard(cardId).then(function(stuff){
			console.log("horray");
		});

	};

});