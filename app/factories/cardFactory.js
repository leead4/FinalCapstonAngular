"use strict";

app.factory("CardStorage", ($window, $q, $http) =>{

let getCards = () => {
        return $q(function(resolve, reject){
        	$http.get(`data.json`)
           .then(function(cards){
                resolve(cards);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

return {getCards};	



});