'use strict';

angular.module('pifarmApp')
  .controller('AuthCtrl',
  ['$scope', 'Config',
  function ($scope, Config) {
    
    $scope.current_year = Config.current_year;

  }]);
