'use strict';

function apiSvc($http) {
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
    function post(url, data, success, failure) {
       // authenticationService.setHeader();
        $http.post(url, data).then(function (result) {
            success(result);
        }, function (error) {
            console.log(error.status)
            if (error.status === 401) {
                //notificationService.displayError('Bạn cần đăng nhập.')
            }
            else if (failure != null) {
                failure(error);
            }
        });
    }
    return { get: get, post: post };
}

angular
    .module('common.module')
    .factory('apiSvc', ['$http', apiSvc]);