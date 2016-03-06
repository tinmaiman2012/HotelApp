(function () {
  'use strict'

  angular.module('src.modules.home', []).controller('HomeCtrl', ['$scope','$timeout',function ($scope,$timeout) {

      $scope.data = "Here is Home view";

  }]);

})();



