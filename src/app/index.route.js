(function() {
  'use strict';

  angular
    .module('arApp')
    .config(routeConfig);

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
          templateUrl: 'app/components/hop/hop.html'
      })
      .when('/portfolio/recall', {
          templateUrl: 'app/components/recall/recall.html'
      })
      .when('/portfolio/crm', {
          templateUrl: 'app/components/crm/crm.html'
      })
      .otherwise({
          redirectTo: '/'
      });
  }

})();
