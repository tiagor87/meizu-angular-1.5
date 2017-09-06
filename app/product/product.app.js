(function(angular) {
  'use strict';

  angular.module('myApp.product', ['ngRoute']).config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/product', {
        controller: 'ProductController',
        controllerAs: 'productCtrl',
        templateUrl: 'product/product.template.html'
      });
    }
  ]);
})(window.angular);
