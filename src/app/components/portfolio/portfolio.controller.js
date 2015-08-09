(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController($timeout) {
        $(document).scroll(scrollCheck);
      	if($(this).scrollTop() < pHeight)
            changeHeaderState(1);
      	});        
  }
})();
