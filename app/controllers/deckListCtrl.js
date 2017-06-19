"use strict";
app.controller("DeckListCtrl", function($scope, $route, $document, $routeParams, $window, $location, CardStorage){



let initial = ()=> {
	CardStorage.getDecks().then(function(data){
	console.log(data);
	let pantsArray = data.data;
	console.log("this", pantsArray.results);
	let pandas = pantsArray.results
	console.log(pandas);
	let goodArray = [];
		for (var i = 0; i < pandas.length; i++){
			console.log(pandas[i]);
			goodArray.push(pandas[i].name);

		}
		console.log(goodArray);
		$scope.showMe = goodArray;


	});


};


initial()
});



