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
          controller: 'MainController'
      })
      .when('/portfolio', {
          templateUrl: 'app/components/portfolio/portfolio.html',
          controller: 'PortfolioController'
      })
      .when('/about', {
          controller: 'AboutController',
          templateUrl: 'app/components/about/about.html'
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
        controller: 'CrmController',
          templateUrl: 'app/components/crm/crm.html'
      })
      .when('/portfolio/chatify', {
          controller: 'ChatifyController',
          templateUrl: 'app/components/chatify/chatify.html'
      })
      .when('/portfolio/milan', {
          controller: 'MilanController',
          templateUrl: 'app/components/milan/milan.html'
      })
      .when('/portfolio/graphics', {
          controller: 'GraphicsController',
          templateUrl: 'app/components/graphics/graphics.html'
      })
      .when('/portfolio/redesign', {
          controller: 'RedesignController',
          templateUrl: 'app/components/redesign/redesign.html'
      })
      .when('/portfolio/visualization', {
          controller: 'VisualizationController',
          templateUrl: 'app/components/visualization/visualization.html'
      })
      .when('/portfolio/infoviz', {
          controller: 'InfovizController',
          templateUrl: 'app/components/infoviz/infoviz.html'
      })
      .otherwise({
          redirectTo: '/'
      });
  }

})();
