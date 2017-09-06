(function(angular) {
  'use strict';

  angular.module('myApp').controller('ProductController', [
    'productService',
    'shoppingCartService',
    function(productService, shoppingCartService) {
      var self = this;
      this.products = [];
      this.loading = false;

      this.addProduct = function(product) {
        self.loading = true;
        productService
          .add(product)
          .catch(function(error) {
            console.log(error);
          })
          .finally(function() {
            self.loading = false;
          });
      };

      this.addToCart = function(product) {
        self.loading = true;
        shoppingCartService
          .add(product)
          .catch(function(error) {
            console.log(error);
          })
          .finally(function() {
            self.loading = false;
          });
      };

      (function() {
        self.loading = true;
        productService
          .getAll()
          .then(function(products) {
            self.products = products;
          })
          .catch(function(error) {
            console.log(error);
          })
          .finally(function() {
            self.loading = false;
          });
      })();
    }
  ]);
})(window.angular);
