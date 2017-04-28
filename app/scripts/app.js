var blocChat = angular.module('blocChat', ['ui.router', 'firebase']);
    blocChat.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home',{
              url: '/',
              controller: 'HomeCtrl as home',
              templateUrl: '/templates/home.html'
        });
    });
