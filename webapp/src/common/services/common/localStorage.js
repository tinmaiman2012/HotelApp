(function(){
  'use strict';

  var localStorageService = function($window){
    var localStorage = $window.localStorage;

    var PREFIX = '';

    return {

      set : function(key, value){
        localStorage[PREFIX+key] = value;
      },

      get : function(key){
        return localStorage[PREFIX+key];
      },

      setObject : function(key, value){
        localStorage[PREFIX+key] = angular.toJson(value);
      },

      getObject : function(key){
        return JSON.parse(localStorage[PREFIX+key]);
      },

      remove : function(key){
        localStorage.removeItem(PREFIX+key);
      },

      getAllKeys : function(){
        var keys = [];
        for(var i = 0; i < localStorage.length; i++){
          keys.push(localStorage.key(i));
        }
        return keys;
      }
    }
  }

  angular.module('src.common.services.localStorageService',[]).factory('localStorageService',localStorageService);




})();
