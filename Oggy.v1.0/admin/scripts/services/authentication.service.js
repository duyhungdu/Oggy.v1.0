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
        tokenInfo = $localStorage.tokenInfo;
        if (tokenInfo) {
            setAuthenticationData(tokenInfo);
        }
    }
    this.init();

    function setAuthenticationData(_tokenInfo) {
        output.data.isAuthenticated = true;
        output.data.username = _tokenInfo.username;
        output.data.email = _tokenInfo.email;
        output.data.userId = _tokenInfo.userId;
        output.data.phoneNumber = _tokenInfo.phoneNumber;
        output.data.googleAccount = _tokenInfo.googleAccount;
        output.data.accessToken = _tokenInfo.accessToken;
    }
    output.setTokenInfo = function (userInfo) {
        tokenInfo = userInfo;
        $localStorage.tokenInfo = tokenInfo;
        setAuthenticationData(tokenInfo);
    }
    output.getTokenInfo = function () {
        return output.data;
    }
    output.removeTokenInfo = function () {
        tokenInfo = null;
        $localStorage.tokenInfo = null;
        this.denyAuthenticaion();
    }

    output.denyAuthenticaion = function () {
        output.data = {};
    }

    return output;
}

angular
    .module('common.module')
    .factory('authenticationSvc', ['$rootScope', '$http', '$q', '$localStorage', authenticationSvc]);