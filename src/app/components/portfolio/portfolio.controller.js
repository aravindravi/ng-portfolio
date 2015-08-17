(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController($window, $rootScope) {
  	angular.element($window).unbind("scroll");
	$rootScope.changeHeaderState(3);
      	      
  }
})();
