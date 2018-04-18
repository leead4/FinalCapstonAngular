"use strict";

app.factory("DocStorage", ($window, $q, $http) =>{

let uploadFile = () => {
	// let file = '/assets/text.txt';
	let file = {"thing" : "this is a text so hey whats up"};

	    return $q((resolve, reject) => {
	    	console.log("file", file);
		    $http.post(`http://localhost:8000/upload/(?P<${file}>[^/]+)$`,
		     JSON.stringify(file)) 
		    .then((djangostuff) => {
			     resolve(djangostuff);
            })
		    .catch((error) => {
			    reject(error);
            });
	    });
    };









return {uploadFile};

});