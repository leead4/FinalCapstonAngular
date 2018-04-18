"use strict";
app.controller("DeckBuildCtrl", function($scope, $window, $rootScope, $location, $route, CardStorage){

	$scope.newDeckObject = {
		name:''
 	};

	$scope.addDeck = function(){
		console.log("im tiny rick", $scope.newDeckObject);
		CardStorage.postDeck($scope.newDeckObject).then(function(comeback){
			CardStorage.getDecks().then(function(bla){
				$rootScope.showMer = bla.data;
				console.log("this is it", $rootScope.showMer);
				console.log("bla.data", bla.data);
				$window.location.href = "#!/";
				$route.reload();
			});
			// $scope.$apply();
			// });
		});
	};

});

