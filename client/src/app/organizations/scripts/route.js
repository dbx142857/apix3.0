'use strict';
angular.module('OrganizationsApp')
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
    .when('/organizations', {
      templateUrl: 'app/organizations/templates/list.tpl.html',
      controller: 'OrganizationListCtrl'
    })
    .when('/organizations/item/:id', {
      templateUrl: 'app/organizations/templates/item.tpl.html',
      controller: 'OrganizationItemCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'app/organizations/templates/item.tpl.html',
      controller: 'OrganizationItemCtrl'
    });
  }]);