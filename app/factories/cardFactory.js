"use strict";

app.factory("CardStorage", ($window, $q, $http) =>{

let getCards = () => {
        return $q(function(resolve, reject){
        	$http.get(`http://localhost:8000/cards`)
           .then(function(cards){
                resolve(cards);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

    let postCard = (newCard) => {
        return $q((resolve, reject) => {
            $http.post(`http://localhost:8000/cards`, 
            JSON.stringify(newCard))
            .then((djangoStuff) => {
                 resolve(djangoStuff);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    let getDecks = () => {
        return $q(function(resolve, reject){
            $http.get(`http://localhost:8000/decks`)
           .then(function(decks){
                console.log(decks);
                resolve(decks);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

    let postDeck = (newDeck) => {
        return $q((resolve, reject) => {
            $http.post(`http://localhost:8000/decks`, 
            JSON.stringify(newDeck))
            .then((djangoStuff) => {
                 resolve(djangoStuff);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

return {getCards, postCard, getDecks, postDeck};	



});