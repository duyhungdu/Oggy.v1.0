'use strict';

function apiService($http) {
    function get(url, params, success, failure) {
        //authenticationService.setHeader();
        $http.get(url, params).then(function (result) {
            success(result);
        }, function (error) {
            if (error.status == 401) {
                //notificationService.displayError('missing authentication!')
            }
            failure(error);
        });
    }
    return { get: get };
}

angular
    .module('urbanApp')
    .factory('apiService', ['$http', apiService]);