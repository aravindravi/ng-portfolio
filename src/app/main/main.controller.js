(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window, $rootScope) {
  	$scope.$on('$viewContentLoaded', function(){
      	//$(document).scroll(scrollCheck);
        angular.element($window).bind("scroll", $rootScope.scrollCheck);
        $rootScope.changeHeaderState(1);
    });
  }
})();
