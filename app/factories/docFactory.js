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



let getDict = (user)=> {
		let plants = [];
    
        // return $q((resolve, reject) => {
	      //   $http.get(`${FBCreds.databaseURL}/plantItems.json?orderBy="uid"&equalTo="${user}"`)
	      //   .then((plantObject) => {
		     // let plantCollection = plantObject.data;
		     // Object.keys(plantCollection).forEach((key)=>{
			    // plantCollection[key].id = key;
			    // plants.push(plantCollection[key]);
		     // });
	      //      resolve(plants);
	      //   })
	      //   .catch((error) =>{
		     //   reject(error);
	      //   });

        // });
    };





return {uploadFile};

});