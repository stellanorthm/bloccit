(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('index', {
                url: '/',
                controller: 'IndexCtrl as index',
                templateUrl: '/index.html'
            });
    };

angular
    .module('chatApp', ['ui.router'])
    .config(firebase);
})();
