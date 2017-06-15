"use strict";
app.service('FileUpload', function ($http, $q){
            this.uploadFileToUrl = function(file, uploadUrl){
               var fd = new FormData();
               fd.append('file', file);
            
               return $q((resolve, reject) => {
                  $http({
                    url: uploadUrl,
                    method: "POST",
                    data: fd,
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      'Content-Disposition': 'attachment; filename=upload.txt'
                    },
                    transformRequest: function (data, headersGetter) {
                        var formData = new FormData();
                        angular.forEach(data, function (value, key) {
                          formData.append(key, value);
                        });

                        var headers = headersGetter();
                        delete headers['Content-Type'];

                        return formData;
                    }
                  })
                  .then((djangostuff) => {
                    resolve(djangostuff);
                  })
            .catch((error) => {
                reject(error);
            });
        });
      };
  });
      