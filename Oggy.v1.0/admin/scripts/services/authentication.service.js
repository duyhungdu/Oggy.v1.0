'use strict';

function authenticationSvc($rootScope, $http, $q, $localStorage) {
    var output = {};
    var tokenInfo = {};
    

    var authentication = {
        isAuthenticated: false,
        username: ""
    };
    output.data = authentication;

    this.init = function () {

        var tokenInfo = $localStorage.tokenInfo;
        if (tokenInfo) {
            output.data.isAuthenticated = true;
            output.data.username = tokenInfo.username;
            output.data.email = tokenInfo.email;
            output.data.userId = tokenInfo.userId;
            output.data.phoneNumber = tokenInfo.phoneNumber;
            output.data.googleAccount = tokenInfo.googleAccount;
            output.data.accessToken = tokenInfo.accessToken;
        }
    }
    this.init();

    output.setTokenInfo = function (userInfo) {
        tokenInfo = userInfo;
        $localStorage.tokenInfo = tokenInfo;
    }
    output.getTokenInfo = function () {
        return tokenInfo;
    }
    output.removeTokenInfo = function () {
        tokenInfo = null;
        $localStorage.tokenInfo = null;
        this.denyAuthenticaion();
    }

    output.denyAuthenticaion = function () {
        output.data.isAuthenticated = false;
        output.data.username = "";
    }

    return output;
}

angular
    .module('common.module')
    .factory('authenticationSvc', ['$rootScope', '$http', '$q', '$localStorage', authenticationSvc]);