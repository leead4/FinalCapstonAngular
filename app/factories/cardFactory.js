"use strict";

app.factory("CardStorage", ($window, $q, $http) =>{

let getCards = () => {
        return $q(function(resolve, reject){
        	$http.get(`http://127.0.0.1:8000/cards`)
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
            $http.post(`http://127.0.0.1:8000/createcard/`, 
            JSON.stringify(newCard))
            .then((djangoStuff) => {
                 resolve(djangoStuff);
            })
            .catch((error) => {
                console.log("there is an error");
                reject(error);
            });
        });
    };

    let getDecks = () => {
        return $q(function(resolve, reject){
            console.log("i'm calling the db");
            $http.get(`http://127.0.0.1:8000/decks`)
           .then(function(decks){
                console.log(decks);
                resolve(decks);
            })
            .catch(function(error){
                console.log("there was a problem with the db");
                reject(error);
            });
        });
    };

    let postDeck = (newDeck) => {
        return $q((resolve, reject) => {
            console.log("blabla", newDeck);
            // $http.post(`http://localhost:8000/createdeck/`, 
            $http.post(`http://127.0.0.1:8000/createdeck/`, 
            JSON.stringify(newDeck))
            .then((djangoStuff) => {
                 resolve(djangoStuff);
            })
            .catch((error) => {
                console.log("im a broken api call");
                reject(error);
            });
        });
    };

    let deleteCard = (cardId) => {
        return $q((resolve, reject) => {
            console.log('blabla', cardId);
            $http.delete(`http://127.0.0.1:8000/deletethiscard/${cardId}/`)
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
            $http.delete(`http://127.0.0.1:8000/deletethisdeck/${deckId}/`)
            .then((djangoStuff)=>{
                resolve(djangoStuff);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };

    let editCard = (card) => {
        return $q((resolve, reject) => {
            console.log('blabla', card);
            let cardId = card.id;
            $http.put(`http://127.0.0.1:8000/editthiscard/${cardId}/`, 
            JSON.stringify(card))
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
            $http.get(`http://127.0.0.1:8000/getcardsindeck/${deckStuff}/`)
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