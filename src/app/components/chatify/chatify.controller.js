(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('ChatifyController', ChatifyController);

  /** @ngInject */
  function ChatifyController($window, $scope, $location) {
  	$scope.$on('$viewContentLoaded', function(){
  		$window.ga('send', 'pageview', { page: $location.url() });
  	});
  }
})();
