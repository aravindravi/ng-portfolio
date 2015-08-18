(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('HopController', HopController);

  /** @ngInject */
  function HopController($window) {
  	$window.scrollspy();
  }
})();
