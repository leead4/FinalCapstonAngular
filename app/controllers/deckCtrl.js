"use strict";

app.controller("DeckCtrl", function($scope, $route, $document, $routeParams, $window, $location, CardStorage, LocalFactory){
	  $('.dropdown-button').dropdown('open');
        
	let intial = () => {
		let myStuff = LocalFactory.getCurrentJSON();
			$scope.myPandaPants = myStuff.semantic_roles;
			console.log("my pants", myStuff.semantic_roles);
		
			let myDeckJunk = CardStorage.getDecks();
			console.log("the junk is here", myDeckJunk);
			
			CardStorage.getDecks().then(function(data){
				console.log(data);
					let pantsArray = data.data;
						console.log("this", pantsArray.results);
					let pandas = pantsArray.results;
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

	 		// console.log("this is what we're repeating", myStuff["semantic_roles"]);

	intial();




	$scope.saveThisCard = (sub, act, obj) =>{

		console.log("stuff", sub, act, obj);
		let front = sub + act;
		let back = obj;
		let cardObject = {
			"front" : front,
			"back" : back
		};

		CardStorage.postCard(cardObject).then(function(stuff){
			console.log(cardObject);
			console.log("we did it", stuff);
		});


	};




$scope.openSesame = ()=>{
$('.dropdown-button').dropdown('open');
console.log("pewpew");
	
};

$scope.closeSesame = ()=>{

 $('.dropdown-button').dropdown('close');
};
	





});