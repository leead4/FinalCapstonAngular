"use strict";

app.controller("HomeCtrl", function($scope, $route, $document, $routeParams, $window, $location, DocStorage, FileUpload){

	// $scope.textObject = {
	// 	file: '',
	// 	file_path: '' 
	// };

	// let doc = 'txt.txt'
	// let doc_path = '/assets/text.txt'

		

	$scope.sendThatFile = function(){
               var file = $scope.myFile;
               
               console.log('file is ', file);
               console.dir(file);
               console.log("name", file.name)
               
               var uploadUrl = "http://127.0.0.1:8000/upload/";


		// DocStorage.uploadFile().then(function(comeback){
		FileUpload.uploadFileToUrl(file, uploadUrl).then(function(stuff){
			console.log(stuff);
			console.log(typeof(stuff));
			console.log("mewo", Object.keys(stuff));
			let meow = stuff.data
			console.log("panda", meow);

			console.log("we sent it!");

			$window.location.href = "#!/deck";
			// $scope.apply();
		});
			// $scope.apply();
		// });
	};

	

});