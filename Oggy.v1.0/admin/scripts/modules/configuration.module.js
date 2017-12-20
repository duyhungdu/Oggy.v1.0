angular
    .module('configuration.module', [
        'common.module'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            //Module routes
            $stateProvider
                .state('app.configuration', {
                    template: '<div ui-view></div>',
                    abstract: true,
                    url: '/configuration',
                })
                .state('app.configuration.settings', {
                    url: '/settings',
                    templateUrl: 'views/configuration/setting/settings.html',
                    resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load('scripts/controllers/configuration/setting/settings.controller.js');
                        }]
                    },
                    data: {
                        title: 'Settings',
                    },
                    controller: "settingsCtrl"
                })
        }]);
