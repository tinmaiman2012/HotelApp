(function () {
  'use strict'
  angular.module('src.common.services.languages', []).factory('languagesService', [
    function () {
      var dataLanguages = [
        {
          id: 'english',
          name: 'English'
        },
        {
          id: 'vietnamese',
          name: 'Vietnamese'
        }
      ];
      var languagesService = {
        getDataLanguages: getDataLanguages
      };
      return languagesService;

      function getDataLanguages() {
        return dataLanguages;
      }
    }
  ]);
})();