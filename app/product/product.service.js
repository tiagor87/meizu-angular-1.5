(function(angular) {
  'use strict';

  angular.module('myApp').factory('productService', [
    '$http',
    function($http) {
      var ProductService = function() {};

      ProductService.prototype.getAll = function() {
        return $http.get('assets/smartphone.json').then(function(response) {
          return response.data;
        });
      };

      return new ProductService();
    }
  ]);
})(window.angular);
