(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('MilanController', MilanController);

  /** @ngInject */
  function MilanController($window, $scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
