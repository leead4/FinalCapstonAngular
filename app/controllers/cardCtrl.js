"use strict";

app.controller("CardCtrl", function($scope, $q, $route, $document, $routeParams, $window, $location, CardStorage, LocalFactory){


console.log("im card contrl look at me!");

let initial = () => {
        return $q((resolve, reject) => {
        	console.log("we freaking did it meow");
			let deckJunk = LocalFactory.getCurrentDeck();
			CardStorage.getCardsInDeck(deckJunk).then(function(data){
				console.log(data);
				let pantsArray = data.data;
				console.log("this", pantsArray);
				let goodArray = [];
				for (var i = 0; i < pantsArray.length; i++){
				    console.log(pantsArray[i]);
					goodArray.push(pantsArray[i]);
				}
				console.log(goodArray);
				$scope.showMermaid = goodArray;
            	
			})
            .then((Stuff) => {
                 resolve(Stuff);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };
        

initial();

});