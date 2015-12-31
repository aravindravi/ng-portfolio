
(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $window, $rootScope, $interval, $timeout, $location) {
    $scope.$on('$viewContentLoaded', function(){
        //$(document).scroll(scrollCheck);
        $('.video-holder').css('height', $window.innerHeight+'px');
        $('#intro').css('height', $window.innerHeight+'px');
        $window.ga('send', 'pageview', { page: $location.url() });
        angular.element($window).bind("scroll", $rootScope.scrollCheck);
        $rootScope.changeHeaderState(1);
        var count=1;
        var numImages=4;
        $timeout(function() {
          $('.inside').addClass('zoom');
        },100);
        
        $interval(function() {
          $('.inside').removeClass('zoom').removeClass('switcher1').removeClass('switcher2').removeClass('switcher3').removeClass('switcher4');
          if(count===numImages) {
            count=1;
          }
          else {
            count++;
          }
          $('.inside').addClass('switcher'+count.toString());
          $timeout(function() {
            
            $('.inside').addClass('zoom');
          }, 1000);

        },5000);
    });
  }
})();