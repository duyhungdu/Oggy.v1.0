'use strict';

function sessionCtrl($scope, $state, loginSvc) {
    $scope.signin = function () {
        loginSvc.login('duyhungdu@gmail.com', 'DuyHung@6').then(function () {
            $state.go('app.dashboard');
        });
      //  $state.go('user.signin');
    };

    $scope.submit = function () {
        loginSvc.login('duyhungdu@gmail.com', 'DuyHung@6').then(function () {
            $state.go('app.dashboard');
        });
        
    };
}

angular
    .module('urbanApp')
    .controller('sessionCtrl', ['$scope', '$state', 'loginSvc', sessionCtrl]);
