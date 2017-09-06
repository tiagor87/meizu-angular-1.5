(function(angular) {
  'use strict';

  angular.module('myApp.shoppingCart').factory('shoppingCartService', [
    '$q',
    function($q) {
      var ShoppingCartService = function() {
        this._products = [];
        this._listeners = [];
      };

      ShoppingCartService.prototype.add = function(product) {
        this._products.push(product);
        this._notifyListChange();
        return $q.resolve();
      };

      ShoppingCartService.prototype.delete = function(id) {
        var i = this._products.findIndex(function(product, index) {
          return product.id === id;
        });
        this._products.splice(i, 1);
        this._notifyListChange();
      };

      ShoppingCartService.prototype.listenToListChange = function(callback) {
        var that = this;
        var i = this._listeners.push(callback) - 1;
        return function() {
          that._listeners.splice(i, 1);
        };
      };

      ShoppingCartService.prototype.getAll = function() {
        return $q.resolve(this._products.slice());
      };

      ShoppingCartService.prototype._notifyListChange = function() {
        var productsCopy = this._products.slice();
        for (var i = 0; i < this._listeners.length; i++) {
          var listener = this._listeners[i];
          listener(productsCopy);
        }
      };

      return new ShoppingCartService();
    }
  ]);
})(window.angular);
