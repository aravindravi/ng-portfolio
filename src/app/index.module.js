(function() {
  'use strict';

  angular
    .module('arApp', ['ngAnimate', 'ngRoute', 'ui.bootstrap'])
    .controller("navCtrl", function($scope, $location){
      $('#modal').on('hidden.bs.modal', function () {
            //new WOW().init();
          $('#projects li').children().removeClass('fade');
          $('#projects').removeClass('project-open');
          if($('.videoFrame') !== null) {
            $('.videoFrame').attr('src', '');
          }
        });
      $scope.isActive = function(path) {
          return path === $location.path();
      };
    });
})();
