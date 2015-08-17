(function() {
  'use strict';

  angular
    .module('arApp')
    .directive('ngHeader', function($location) {
    	return {
    		restrict: 'E',
    		controller: 'HeaderController',
    		templateUrl: 'app/components/header/header.html',
    	};
    })
    .controller("HeaderController", function($scope, $location, $window, $rootScope){
	      $scope.isActive = function(path) {
	          return path === $location.path();
	      };
	      $rootScope.scrollCheck = function () { 
		      if(($(this).scrollTop() > 0)) {   
		          //Scrolled Down
		          $rootScope.changeHeaderState(3);
		      } 
		      else
		      {
		        $rootScope.changeHeaderState(1);
		      } 

		      $('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
		        if ( e.which > 0 || e.type === 'mousedown' || e.type === 'mousewheel' ){
		          $('html,body').stop();
		        }
		       });
		    };

		    $rootScope.changeHeaderState = function(state) {
		      if(state===3)
		      {
		        $('header').addClass('state2').addClass('state3');
		      }
		      else if(state===2)
		      {
		        $('header').addClass('state2').removeClass('state3');
		      }
		      else
		      {
		       $('header').removeClass('state3');
		      }
		    };

	      angular.element($window).bind("scroll", $rootScope.scrollCheck);
    });
  
	  

})();