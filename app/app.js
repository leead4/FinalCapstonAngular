"use strict";

var app = angular.module('FlashCards', ['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider. 
	when('/', {
    templateUrl: 'partials/home.html',
    controller: "HomeCtrl"
  }).
    when('/decklistview', {
        templateUrl: 'partials/decklistview.html',
        controller: "DeckListCtrl"
    })
    .when('/deck', {
      templateUrl: 'partials/deck.html',
      controller: "DeckCtrl"
    });


    
});

