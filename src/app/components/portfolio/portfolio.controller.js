(function() {
  'use strict';

  angular
    .module('arApp')
    .controller('PortfolioController', PortfolioController);

  /** @ngInject */
  function PortfolioController($window, $rootScope, $scope, $location, $uibModal, ngDialog, $http) {
    var $ctrl = this;
	  $scope.$watch('$viewContentLoaded', function()
        {
            $window.ga('send', 'pageview', { page: $location.url() });
            $('video').each(function() {
	           $(this).get(0).play();
	        });
        });
    $scope.verifyPwd = function (targetPage) {
      if ($rootScope.authenticated)
        $location.path('/portfolio/'+targetPage)
      else
      { 
        $scope.errorMsg = null
        $scope.targetPage = targetPage
        $scope.dialog = ngDialog.open({ 
          template: 'app/components/modal/modal.html',
          scope: $scope
        });
      }


    };
    $scope.auth = function () {
        var pwd = angular.element('#password').val();
        $http({
          method: 'GET',
          url: '/authenticate?password='+pwd
        }).then(function successCallback(response) {
          console.log(response)
          if(response.data=="true") {
            $rootScope.authenticated=true
            $scope.errorMsg = null
            $location.path('/portfolio/'+$scope.targetPage)
            ngDialog.close()

          }
          else {
            $scope.errorMsg = 'Incorrect Password'
          }
        }, function errorCallback(response) {
            $scope.errorMsg = 'Whoops, an error occured. Please let me know about this!'           
        });
    }
      
  }
})();
