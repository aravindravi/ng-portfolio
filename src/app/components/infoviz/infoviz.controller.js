(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('InfovizController', InfovizController);

  /** @ngInject */
  function InfovizController($window, $scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
