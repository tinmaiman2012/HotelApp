(function () {
    'use strict';
    var historyrRestApi = function ($resource) {
        var result = $resource('rest/history',
            {
            },
            {
                query: {isArray: true}
            }
        );
        return result;
    };

    angular.module('src.common.services.restApi.history', [])
        .factory('historyrRestApi', historyrRestApi);
}());
