(function(){

    'use strict';
    angular.module('src.modules', [
        'src.modules.home'
    ]).config(function ($stateProvider,$urlRouterProvider) {

        $stateProvider.state('home', {
            url:"/",
            templateUrl: 'src/modules/home/home.html',
            controller: "HomeCtrl"
        })
        $urlRouterProvider.otherwise("/");

    })

})();