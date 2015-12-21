'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
    });
}])

.controller('LoginCtrl', [function() {
    if(localStorage.kiosk) {
        checkLogin(JSON.parse(localStorage.kiosk));
    }
    function checkLogin(kiosk) {
        $.post(kiosk.api + '/check', {}).done();
    }
}]);