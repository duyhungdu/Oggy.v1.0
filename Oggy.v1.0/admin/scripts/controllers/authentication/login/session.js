'use strict';

function sessionCtrl($scope, $state, authenticationSvc) {
    $scope.signin = function () {
        authenticationSvc.login('duyhungdu@gmail.com', 'DuyHung@6');
      //  $state.go('user.signin');
    };

    $scope.submit = function () {
        authenticationSvc.login('duyhungdu@gmail.com', 'DuyHung@6');
      //  $state.go('app.dashboard');
    };
}

angular
    .module('urbanApp')
    .controller('sessionCtrl', ['$scope', '$state', 'authenticationSvc', sessionCtrl]);
