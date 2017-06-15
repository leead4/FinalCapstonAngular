"use strict";

var app = angular.module('FlashCards', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider. 
	when('/', {
    templateUrl: 'partials/home.html',
    controller: "HomeCtrl"
  }).
	// when('/login', {
	// 	templateUrl: 'partials/login.html',
	// 	controller: "LoginCtrl"
	// }).
    // when('/editcard', {
    //     templateUrl: 'partials/card.html',
    //     controller: "CardCtrl"
    // }).
    when('/deck', {
      templateUrl: 'partials/deck.html',
      controller: "DeckCtrl"
    });
    // when('/play', {
    //   templateUrl: 'partials/play.html',
    //   controller: "NewGardenCtrl"
    // }).
    // when('/home', {
    //   templateUrl: 'partials/home.html',
    //   controller: "HomeCtrl"
    // });
    
});

