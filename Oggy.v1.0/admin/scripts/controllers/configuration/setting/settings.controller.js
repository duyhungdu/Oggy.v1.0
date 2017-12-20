'use strict';
function settingsCtrl($scope, $log, COLORS, SweetAlert) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
    SweetAlert.swal('Here\'s a message');
    SweetAlert.swal({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: COLORS.danger,
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        closeOnConfirm: false,
    },
        function () {
            swal('Deleted!', 'Your imaginary file has been deleted!', 'success');
        });

    $scope.setPage = function (pageNo) {

        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.log('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
}

angular
    .module('configuration.module')
    .controller('settingsCtrl', ['$scope', '$log', 'COLORS', 'SweetAlert', settingsCtrl]);
