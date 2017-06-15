"use strict";

app.controller("CardCtrl", function($scope, $route, $document, $routeParams, $window, $location){

$scope.account = {
	email: "",
	password: ""
};

let logout = ()=> {
	console.log("I'm a logout function!");
	$window.location.url = '/login';
};

$scope.register = () => {
	console.log("Im trying to register here!");
	$window.location.url = '/home';

};

$scope.login = () => {
	console.log("im logging in!");
	$window.location.url = '/home';
};





});