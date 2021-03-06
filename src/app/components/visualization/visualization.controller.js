(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('VisualizationController', VisualizationController);

  /** @ngInject */
  function VisualizationController($window, $scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
