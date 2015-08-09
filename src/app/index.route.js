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
      .otherwise({
          redirectTo: '/'
      });
  }

})();
