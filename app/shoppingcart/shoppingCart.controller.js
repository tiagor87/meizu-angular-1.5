(function(angular) {
  'use strict';

  angular.module('myApp.shoppingCart').controller('ShoppingCartController', [
    'shoppingCartService',
    '$scope',
    function(shoppingCartService, $scope) {
      var self = this;
      this.products = [];

      (function() {
        shoppingCartService.getAll().then(function(products) {
          self.products = products;
        });
        var unwatch = shoppingCartService.listenToListChange(function(
          products
        ) {
          self.products = products;
        });
        $scope.$on('$destroy', function() {
          unwatch();
        });
      })();
    }
  ]);
})(window.angular);
