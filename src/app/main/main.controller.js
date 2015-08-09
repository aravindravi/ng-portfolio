(function() {
  'use strict';

  angular
    .module('desktop')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1439082610796;

  }
})();
