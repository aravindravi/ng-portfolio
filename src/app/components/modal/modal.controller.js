(function() {
  'use strict';

  angular
    .module('arApp')
    .controller("ModalController", function($scope) {
		  $scope.ok = function () {
		    $uibModalInstance.close($ctrl.selected.item);
		  };

		  $scope.cancel = function () {
		    $uibModalInstance.dismiss('cancel');
		  };

    });
  
})();