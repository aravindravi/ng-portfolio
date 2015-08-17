(function() {
  'use strict';

  angular
    .module('arApp')
    .directive('SubnavController', function() {
      return {
        restrict: 'E',
        templateURL: 'app/components/subnav/subnav.html'
      }
        	      
  }
})();
