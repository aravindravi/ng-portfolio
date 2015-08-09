(function() {
  'use strict';

  angular
    .module('arApp', ['ngAnimate', 'ngRoute', 'ui.bootstrap'])
    .controller("navCtrl", function($scope, $location){
      $('#modal').on('hidden.bs.modal', function () {
            //new WOW().init();
          $('#projects li').children().removeClass('fade');
          $('#projects').removeClass('project-open');
          if($('.videoFrame') != null)
          $('.videoFrame').attr('src', '');
        });
      $scope.isActive = function(path) {
          return path === $location.path();
      }
    });
    var changeHeaderState = function(state){
      if(state==3)
      {
        $('header').addClass('state2').addClass('state3');
      }
      else if(state==2)
      {
        $('header').addClass('state2').removeClass('state3');
      }
      else
      {
       $('header').removeClass('state3');
      }
    };
})();
