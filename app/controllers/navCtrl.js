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
						$rootScope.showMer = goodArray;
				});
};

initial();


$scope.goToThisDeck = function(deckJunk){
	console.log("whats up boo", deckJunk);
	LocalFactory.setCurrentDeck(deckJunk);
	};


$scope.bla = $location.url();

$scope.$watch('$rootScope.showMer',(x=true) =>{
	console.log("hey gurl", x);
    console.log($location.path());
}, function(value){
    console.log(value, 'blabla');
});







});