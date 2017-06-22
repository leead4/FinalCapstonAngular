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
            console.log("we made it");
            $http.post(`http://localhost:8000/createcard/`, 
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
            console.log("blabla", newDeck);
            $http.post(`http://localhost:8000/createdeck/`, 
            JSON.stringify(newDeck))
            .then((djangoStuff) => {
                 resolve(djangoStuff);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

    let deleteCard = (cardId) => {
        return $q((resolve, reject) => {
            console.log('blabla', cardId);
            $http.delete(`http://localhost:8000/deletethiscard/${cardId}/`)
            .then((djangoStuff)=>{
                resolve(djangoStuff);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
let deleteDeck = (deckId) => {
        return $q((resolve, reject) => {
            console.log('blabla', deckId);
            $http.delete(`http://localhost:8000/deletethisdeck/${deckId}/`)
            .then((djangoStuff)=>{
                resolve(djangoStuff);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    let editCard = (cardId) => {
        return $q((resolve, reject) => {
            console.log('blabla', cardId);
            $http.patch(`http://localhost:8000/editthiscard/${cardId}/`, JSON.stringify({
                "card_front": "party","car_back" : "hat"}))
            .then((djangoStuff)=>{
                resolve(djangoStuff);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    let getCardsInDeck = (deckStuff) => {
        return $q((resolve, reject) => {
            console.log("we in factory", deckStuff);
            $http.get(`http://localhost:8000/getcardsindeck/${deckStuff}/`)
            .then((djangoStuff) => {
                 resolve(djangoStuff);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };

return {getCards, postCard, getDecks, deleteDeck, deleteCard, postDeck, getCardsInDeck, editCard};	



});