(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('RecallController', RecallController);

  /** @ngInject */
  function RecallController($window, $rootScope, $scope) {
  	angular.element($window).unbind("scroll");
	  $rootScope.changeHeaderState(3);
	  $scope.$watch('$viewContentLoaded', function()
        {
            $('video').each(function() {
	           $(this).get(0).play();
	        });
        });
  }
})();
