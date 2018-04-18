"use strict";

app.controller("NavCtrl", function($scope, $route, $rootScope, $document, $routeParams, $window, $location, LocalFactory, CardStorage){
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

// $scope.bla = false;

	let initial = () => {
		
			console.log("look at me go I'm runingin the navbar");
			CardStorage.getDecks().then(function(data){
				console.log(data);
					let deckArray = data.data;
						console.log("this what we got back from getDecks", deckArray);
					// // let pandas = pantsArray.results;
					// 	// console.log("this is the array.results", pandas);
					// let goodArray = [];
					// 	for (var i = 0; i < deckArray.length; i++){
					// 		// console.log(pandas[i]);
					// 		goodArray.push(deckArray[i]);

					// 	}
						// console.log(goodArray);
						$rootScope.showMer = deckArray;
				});
};

initial();


$scope.goToThisDeck = function(deckJunk){
	console.log("whats up boo", deckJunk);
	LocalFactory.setCurrentDeck(deckJunk);
	};


$scope.bla = $location.url();

$scope.$watch('$rootScope.showMer',(x=true) =>{
	console.log("we are monitoring the value of x ", x);
    console.log($location.path(), "this is the location path");
}, function(value){
    console.log(value, 'We are watching for this value');
});







});