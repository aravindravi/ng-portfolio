(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('RecallController', RecallController);

  /** @ngInject */
  function RecallController($window, $rootScope, $scope, $location) {
  	angular.element($window).unbind("scroll");
	  $rootScope.changeHeaderState(3);
	  $scope.$watch('$viewContentLoaded', function()
        {
            $window.ga('send', 'pageview', { page: $location.url() });
            $('video').each(function() {
	           $(this).get(0).play();
	        });
        });
  }
})();
