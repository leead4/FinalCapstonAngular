"use strict";

var app = angular.module('FlashCards', ['ngRoute']);

 

app.config(function($routeProvider){
	
	$routeProvider. 
	when('/', {
    templateUrl: 'partials/home.html',
    controller: "HomeCtrl"
  }).
    when('/decknameview/:deckname', {
        templateUrl: 'partials/decknameview.html',
        controller: "DeckListCtrl"
    })
    .when('/deck', {
      templateUrl: 'partials/deck.html',
      controller: "DeckCtrl"
    })
    .when('/deckBuild', {
      templateUrl: 'partials/deckBuild.html',
      controller: "DeckBuildCtrl"
    }).
    when('/cardview', {
        templateUrl: 'partials/card.html',
        controller: "CardCtrl"
    });


    
});

