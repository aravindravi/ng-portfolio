(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('CometController', CometController);

  /** @ngInject */
  function CometController($window, $scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
