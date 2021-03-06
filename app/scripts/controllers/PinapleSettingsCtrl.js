'use strict';

angular.module('pifarmApp')
.controller('PinapleSettingsCtrl',
['$scope', '$location', 'AccountsRepoSvc', 'PinaplesRepoSvc', 'AccountValidatorSvc', 'pinaple',
function ($scope, $location, AccountsRepo, PinaplesRepo, AccountValidator, pinaple) {

  $scope.pinaple = pinaple;
  $scope.loading = false;
  $scope.error = false;
  
  $scope.remove = function(form, password, pinaple) {
    if( form.$valid ) {
      $scope.loading = true;
      $scope.error = false;

      if( ! AccountValidator.check_password_length(password) ) {
        $scope.loading = false;
        $scope.error = true;
        return;
      }

      AccountsRepo.check_password(password).then(
      function () {
        PinaplesRepo.remove(pinaple).then(
        function () {
          $scope.loading = false;
          $location.url( 'pinaples' );
        },
        function (error, code) {
          $scope.loading = false;
          $scope.error = true;
        });
      },
      function (error, code) {
        $scope.loading = false;
        $scope.error = true;
      });
    }
  };

}]);
