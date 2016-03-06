(function () {

    'use strict';
    angular.module('MainApp', [
        // Angular Modules
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',

        'ui.router',
        'ui.bootstrap',
        'ui.select',
        // Reusable cross src code modules
        'src.common',
        'src.modules'

    ]).controller('AppCtrl',['$scope',function($scope){

        alert("AppCtrl");

    }]);

})();