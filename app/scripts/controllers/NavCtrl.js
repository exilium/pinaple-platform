'use strict';

angular.module('pifarmApp')
  .controller('NavCtrl',
  ['$scope', '$location', 'AuthSvc',
  function ($scope, $location, AuthSvc) {

    $scope.get_user_fullname = function () {
      if( !AuthSvc.account ) {
        return 'Sponge Bob';
      }

      return AuthSvc.account.name;
    };

    $scope.logout = function () {
      AuthSvc.logout();
      $location.url( 'login' );
    };

  }]);
