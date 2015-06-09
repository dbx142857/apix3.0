'use strict';
angular.module('OrganizationsApp')
  .service('Organizations',["$http", "$q", function Organizations($http, $q) {

    return {  
      query : function() {  
        var deferred = $q.defer();
        $http({method: 'GET', url: '../mock/organizations.json'}).  
        success(function(data, status, headers, config) {  
          deferred.resolve(data);
        }).  
        error(function(data, status, headers, config) {  
          deferred.reject(data);
        });  
        return deferred.promise;
      }, // end query
      get : function(){
        var deferred = $q.defer();
        $http({method: 'GET', url: '../mock/organization.json'}).  
        success(function(data, status, headers, config) {  
          deferred.resolve(data);
        }).  
        error(function(data, status, headers, config) {  
          deferred.reject(data);
        });  
        return deferred.promise;
      }  
    }; 
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
