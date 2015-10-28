(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('CrmController', CrmController);

  /** @ngInject */
  function CrmController($scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
