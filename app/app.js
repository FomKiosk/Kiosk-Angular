
angular.module('fomkiosk', [
    'ngRoute',
    'fomkiosk.controllers'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
    ;
    $routeProvider.otherwise({
        redirectTo: '/login'
    });
}]);