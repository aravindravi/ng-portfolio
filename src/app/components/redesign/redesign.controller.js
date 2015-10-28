(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('RedesignController', RedesignController);

  /** @ngInject */
  function RedesignController($scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
