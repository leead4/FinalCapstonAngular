"use strict";

app.controller("DeckCtrl", function($scope, $route, $document, $routeParams, $window, $location, CardStorage, LocalFactory){
	 $(document).ready(function(){
     
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
			$scope.myPandaPants = myStuff.semantic_roles;
			// console.log("my pants", myStuff.semantic_roles);
		
			// let myDeckJunk = CardStorage.getDecks();
			// console.log("the junk is here", myDeckJunk);
			
			CardStorage.getDecks().then(function(data){
				console.log(data);
					let pantsArray = data.data;
						console.log("this", pantsArray.results);
					let pandas = pantsArray.results;
						// console.log(pandas);
					let goodArray = [];
						for (var i = 0; i < pandas.length; i++){
							// console.log(pandas[i]);
							goodArray.push(pandas[i]);

						}
						// console.log(goodArray);
						$scope.showMe = goodArray;

});
};


	intial();

 $scope.cardObject = {

 };


	$scope.saveThisCard = (bla, deckObj ) =>{

		console.log("stuff", bla, deckObj.id);


		let front = bla.subject.text + " "+ bla.action.text;
		let back = bla.object.text;
		let deck = deckObj;
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