(function(){

    'use strict';

    angular.module('src.common', [
        'src.common.services',
        'src.common.directives',
        'src.common.filters',
        'src.common.constants'
    ]);

    /*----------Services---------------*/
    angular.module('src.common.services', [
        'src.common.services.restApi',
        'src.common.services.common'
    ]);

        angular.module('src.common.services.restApi', [
            'src.common.services.restApi.history'
        ]);

        angular.module('src.common.services.common', [
            'src.common.services.languages',
            'src.common.services.localStorageService'
        ]);

    /*----------Directives---------------*/
    angular.module('src.common.directives', [

    ]);

    /*----------Filters---------------*/
    angular.module('src.common.filters', [

    ]);
    /*----------Constants---------------*/
    angular.module('src.common.constants', [

    ]);

})();