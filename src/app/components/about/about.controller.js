(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($timeout) {
  	$(document).scroll(scrollCheck);
      	if($(this).scrollTop() < pHeight)
            changeHeaderState(1);
      	});
  }
})();
