(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window, $rootScope, $interval, $timeout) {
  	$scope.$on('$viewContentLoaded', function(){
      	//$(document).scroll(scrollCheck);
        angular.element($window).bind("scroll", $rootScope.scrollCheck);
        $rootScope.changeHeaderState(1);
        var count=1;
        var numImages=3;
        var imgPath = 'app/main/assets/img/switcher';
        $timeout(function() {
          $('.cover-img').addClass('zoom');
        },100);
        
        $interval(function() {
          $('.cover-img').removeClass('zoom');
          if(count===numImages) {
            count=1;
          }
          else {
            count++;
          }
          $('.cover-img').attr('src',imgPath+count.toString()+'.jpg');
          $timeout(function() {
            
            $('.cover-img').addClass('zoom');
          }, 1000);

        },5000);
    });
  }
})();
