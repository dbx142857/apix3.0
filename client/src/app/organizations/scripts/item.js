'use strict';

angular.module('OrganizationsApp')
  .controller('OrganizationItemCtrl', ['$scope','Organizations',function ($scope,Organizations) {
    var promise = Organizations.get();
    $scope.noun = "Organizations";
    promise.then(function(data) {
        $scope.item = data;  
    }, function(data) {
        $scope.item = {};  
    }); 
  }]);
