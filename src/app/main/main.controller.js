
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
        $('.homepage-hero-module').css('height',$window.innerHeight+'px');
        $window.ga('send', 'pageview', { page: $location.url() });
        angular.element($window).bind("scroll", $rootScope.scrollCheck);
        $rootScope.changeHeaderState(1);
        var count=1;
        var numImages=4;
         scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        $(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });
    });
  }


function scaleVideoContainer() {

    var height = $(window).height() + 5;
    //var unitHeight = $window.innerHeight+'px';


}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }

})();