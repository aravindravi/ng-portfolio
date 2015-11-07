(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($window, $scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
