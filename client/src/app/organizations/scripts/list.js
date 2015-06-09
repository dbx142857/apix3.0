'use strict';

angular.module('OrganizationsApp')
    .controller('OrganizationListCtrl', ['$scope', '$filter', 'ngDialog', 'Organizations',
        function($scope, $filter, ngDialog, Organizations) {
            var promise = Organizations.query();
            var promiseItem = Organizations.get();
            promise.then(function(data) {
                $scope.organizations = data;
            }, function(data) {
                $scope.organizations = [];
            });
            promiseItem.then(function(data) {
                $scope.promiseItem = data;
                console.log(data);
            }, function(data) {
                $scope.promiseItem = {};
            });

            //ngDialog 
            $scope.openConfirm = function() {
                ngDialog.openConfirm({
                    template: 'organizationDialog',
                    controller: 'OrganizationListCtrl',
                    className: 'ngdialog-theme-default'
                }).then(function(value) {
                    console.log('Modal promise resolved. Value: ', value);
                }, function(reason) {
                    console.log('Modal promise rejected. Reason: ', reason);
                });
            };
        }
    ]);