'use strict';

function authenticationSvc($rootScope, $http, $q, $localStorage) {
    var output = {};
    var userInfo;
    var deferred;
    output.login = function (username, password) {
        deferred = $q.defer();
        var data = "grant_type=password&username=" + username + "&password=" + password;
        $http.post($rootScope.baseUrl + 'token', data, {
            headers:
            { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(function (response) {
            userInfo = {
                accessToken: response.data.access_token,
                expires_in: response.data.expires_in,
                token_type: response.data.token_type,
                username: username,
                password: password,
                email: response.data.email,
                userId: response.data.userId,
                phoneNumber: response.data.phoneNumber,
                avatar: response.data.avatar,
                googleAccount: response.data.googleAccount,
            };
            console.log(userInfo);
            //  authenticationService.setTokenInfo(userInfo);
            deferred.resolve(response);
        }, function (err, status) {
            // authData.authenticationData.IsAuthenticated = false;
            // authData.authenticationData.username = "";
            deferred.resolve(err);
        });
        return deferred.promise;
    }
    return output;
}

angular
    .module('urbanApp')
    .factory('authenticationSvc', ['$rootScope', '$http', '$q', '$localStorage', authenticationSvc]);