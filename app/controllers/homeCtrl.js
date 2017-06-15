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
               
               console.log('file is ' );
               console.dir(file);
               
               var uploadUrl = "http://localhost:8000/upload/";


		// DocStorage.uploadFile().then(function(comeback){
		FileUpload.uploadFileToUrl(file, uploadUrl).then(function(stuff){

			console.log("we sent it!");
			$window.location.href = "#!/deck";
			$scope.apply();
		});
			// $scope.apply();
		// });
	};

	// myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
 //            $scope.uploadFile = function(){
 //               var file = $scope.myFile;
               
 //               console.log('file is ' );
 //               console.dir(file);
               
 //               var uploadUrl = "/fileUpload";
 //               fileUpload.uploadFileToUrl(file, uploadUrl);
 //            };
 //         }]);









});