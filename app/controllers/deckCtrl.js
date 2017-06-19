"use strict";

app.controller("DeckCtrl", function($scope, $route, $document, $routeParams, $window, $location, LocalFactory){

 	let intial = () => {
		let myStuff = LocalFactory.getCurrentJSON();	
			$scope.myPandaPants = myStuff["semantic_roles"];
	 		console.log("this is what we're repeating", myStuff["semantic_roles"]);
	};

	intial();

	





});