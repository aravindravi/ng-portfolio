(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout) {
  	$scope.$on('$viewContentLoaded', function(){
      	$(document).scroll(scrollCheck);
      	
  });
  }
	var scrollCheck = function(){     

      if($(this).scrollTop() > 0) {   
          //Scrolled Down
          changeHeaderState(3);
      } else if( (location+"").indexOf('portfolio') > 0) {   
          //Beginning
          changeHeaderState(slideState);
      } 
      else
      {
        changeHeaderState(1);
      }

      if($(this).scrollTop() > 0) 
      {   
        /* $('.chart').easyPieChart({
            easing: 'easeOutElastic',
            delay: 5000,
            animate: 1600,
            barColor: '#2C858D',
            trackColor: '#f6f6f6',
            scaleColor: false,
            lineWidth: 8,
            trackWidth: 8,
            lineCap: 'butt',
            size: 140
        }); */
      }

      $('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e){
            if ( e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel' ){
              $('html,body').stop();
            }
       });
  };
  
  function changeHeaderState(state){
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
