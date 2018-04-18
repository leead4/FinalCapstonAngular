"use strict";
app.controller("DeckListCtrl", function($scope, $rootScope, $route, $document, $routeParams, $window, $location, LocalFactory, CardStorage){

let initial = ()=> {
	console.log("we freaking did");
	
	let deckJunk = LocalFactory.getCurrentDeck();

	CardStorage.getCardsInDeck(deckJunk.id).then(function(data){
		console.log("this is the data", data);
		let deckListPartialDeckArray = data.data;
		$scope.showMe = deckListPartialDeckArray;
		$scope.deckJunkId = deckJunk.id;

	});
	console.log("deckJunk ", deckJunk);
	$scope.currentDeck = deckJunk.name;
};

initial();

$scope.deleteIt = function(cardId){
	console.log("deleteme", cardId);
	CardStorage.deleteCard(cardId).then(function(comeback){
	console.log("cry in the corner", comeback);
		$route.reload();
		
	});
};

$scope.deleteItAll = function(deckId){
	console.log("deleteme", deckId);
	CardStorage.deleteDeck(deckId).then(function(comeback){
		console.log("cry in the corner", comeback);
		CardStorage.getDecks().then(function(bla){
			$rootScope.showMer = bla.data;
			console.log("bla.data", bla.data);
			$window.location.href = "#!/";
			$route.reload();
		});
	});
};


$scope.editableCards = [];

$scope.editableCard = function(card){
	console.log("here is the card", card);
	if($scope.editableCards.includes(card)){
		let target = $scope.editableCards.indexOf(card);
		$scope.editableCards.splice(target, 1);
	}else{
		$scope.editableCards.push(card);
		}
		return $scope.editableCards;
};


$scope.saveChanges = function(editedcard){
	console.log("you changed them", editedcard);
	CardStorage.editCard(editedcard).then(function(response){
		console.log("blahhhh you edited it", response);
	});	

	$scope.editableCard(editedcard);

};

$scope.goToPlayView = function(){
	let sleepyGary = LocalFactory.getCurrentDeck();
	console.log("i need to get over sleepy gary", sleepyGary);
	LocalFactory.setCurrentDeck(sleepyGary);
	console.log("let's go brosef");
	$window.location.href = "#!/cardview";

};

});



