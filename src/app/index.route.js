(function() {
  'use strict';

  angular
    .module('arApp')
    .config(routeConfig)
    .run(function($rootScope, $location, $anchorScroll) {
        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
          $anchorScroll();
      });
    });


  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/portfolio', {
          templateUrl: 'app/components/portfolio/portfolio.html',
          controller: 'PortfolioController',
          controllerAs: 'portfolio'
      })
      .when('/about', {
          templateUrl: 'app/components/about/about.html',
          controller: 'AboutController',
          controllerAs: 'about'
      })
      .when('/portfolio/hop', {
          controller: 'HopController',
          templateUrl: 'app/components/hop/hop.html'
      })
      .when('/portfolio/recall', {
          controller: 'RecallController',
          templateUrl: 'app/components/recall/recall.html'
      })
      .when('/portfolio/crm', {
          templateUrl: 'app/components/crm/crm.html'
      })
      .when('/portfolio/chatify', {
          templateUrl: 'app/components/chatify/chatify.html'
      })
      .when('/portfolio/milan', {
          templateUrl: 'app/components/milan/milan.html'
      })
      .when('/portfolio/graphics', {
          templateUrl: 'app/components/graphics/graphics.html'
      })
      .when('/portfolio/redesign', {
          templateUrl: 'app/components/redesign/redesign.html'
      })
      .when('/portfolio/visualization', {
          templateUrl: 'app/components/visualization/visualization.html'
      })
      .otherwise({
          redirectTo: '/'
      });
  }

})();
