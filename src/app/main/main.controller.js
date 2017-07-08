
(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window, $rootScope, $location) {
    $scope.$on('$viewContentLoaded', function(){
        $window.ga('send', 'pageview', { page: $location.url() });
        angular.element($window).bind("scroll", $rootScope.scrollCheck);
        $rootScope.changeHeaderState(1);
        

    });
  }



})();