(function() {
  'use strict';

  angular
    .module('arApp')
    .directive('subNav', function() {
        return {
          restrict: 'E',
          templateUrl: 'app/components/subnav/subnav.html',
          controller: 'SubnavController'
        };
    })
    .controller('SubnavController', function () {

    });
})();
