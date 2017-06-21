"use strict";
app.controller("DeckListCtrl", function($scope, $route, $document, $routeParams, $window, $location, LocalFactory, CardStorage){



let initial = ()=> {
	console.log("we freaking did");

	let deckJunk = LocalFactory.getCurrentDeck();

	CardStorage.getCardsInDeck(deckJunk).then(function(data){
	console.log(data);
	let pantsArray = data.data;
	console.log("this", pantsArray);
	
	// console.log(pandas);
	let goodArray = [];
		for (var i = 0; i < pantsArray.length; i++){
			console.log(pantsArray[i]);
			goodArray.push(pantsArray[i]);

		}
		console.log(goodArray);
		$scope.showMe = goodArray;


	});
};

	






initial();


$scope.deleteIt = function(cardId){
	CardStorage.deleteCard(cardId);
	console.log("cry in the corner");
	$route.reload();

};

$scope.editIt = function(card){
	CardStorage.editCard(card)
	.then(function(response){
	console.log("blahhhh", response);
		
	});
	

};



$scope.goToPlayView = function(){
	let sleepyGary = LocalFactory.getCurrentDeck();
	console.log("i need to get over sleepy gary", sleepyGary);
	LocalFactory.setCurrentDeck(sleepyGary);
	console.log("let's go brosef");
	$window.location.href = "#!/cardview";

};


});



