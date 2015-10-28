(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController($window, $rootScope, $scope, $location) {
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
