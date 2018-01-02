'use strict';

function loginSvc($rootScope, $http, $q, authenticationSvc) {
    var output = {};
    var userInfo = {};
    var deferred = {};
    output.login = function (username, password) {
        deferred = $q.defer();
        var data = "grant_type=password&username=" + username + "&password=" + password;
        $http.post($rootScope.baseUrl + 'token', data, {
            headers:
            { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (response) {
            userInfo = response.data;
            authenticationSvc.setTokenInfo(userInfo);
            authenticationSvc.data.isAuthenticated = true;
            deferred.resolve(response);
        }, function (err, status) {
            authenticationSvc.denyAuthentication();
            deferred.resolve(err);
        });
        return deferred.promise;
    }
    return output;
}

angular
    .module('common.module')
    .factory('loginSvc', ['$rootScope', '$http', '$q', 'authenticationSvc', loginSvc]);