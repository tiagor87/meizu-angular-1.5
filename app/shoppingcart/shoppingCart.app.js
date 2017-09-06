(function(angular) {
  'use strict';

  angular.module('myApp.shoppingCart', ['ngRoute']).config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/shoppingcart', {
        controller: 'ShoppingCartController',
        controllerAs: 'cartCtrl',
        templateUrl: 'shoppingcart/shoppingcart.template.html'
      });
    }
  ]);
})(window.angular);
