(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('GraphicsController', GraphicsController);

  /** @ngInject */
  function GraphicsController($window, $scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
