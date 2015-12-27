(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController($window, $rootScope, $scope, $location) {
	  $scope.$watch('$viewContentLoaded', function()
        {
            $window.ga('send', 'pageview', { page: $location.url() });
            $('video').each(function() {
	           $(this).get(0).play();
	        });
        });
  }
})();
