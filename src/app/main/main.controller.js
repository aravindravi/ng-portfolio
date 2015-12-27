
(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window, $rootScope, $interval, $timeout, $location) {
  	$scope.$on('$viewContentLoaded', function(){
      	//$(document).scroll(scrollCheck);
        $window.ga('send', 'pageview', { page: $location.url() });
        
    });
  }
})();
