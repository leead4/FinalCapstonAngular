"use strict";

app.controller("HomeCtrl", function($scope, $route, $document, $routeParams, $window, $location, DocStorage, LocalFactory, FileUpload){


	$scope.sendThatFile = function(){
       var file = $scope.myFile;
       console.log('file is ', file);
       console.dir(file);
       console.log("name", file.name);
       var uploadUrl = "http://127.0.0.1:8000/upload/";
	   FileUpload.uploadFileToUrl(file, uploadUrl).then(function(stuff){
			console.log("this is what we are uploading", stuff);
			// console.log(typeof(stuff));
			console.log("mewo", Object.keys(stuff));
			let meow = stuff.data;
			console.log("stuff.data", meow);
			let meowMix = JSON.parse(meow);
			console.log("panda", meow);
			LocalFactory.setCurrentJSON(meowMix);
			console.log("we sent it!");
			$window.location.href = "#!/deck";
	   });
	};

});