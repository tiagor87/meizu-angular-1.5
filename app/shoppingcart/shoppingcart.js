(function() {
    'use strict';
}());

angular.module("myApp.shoppingcart", ["myApp"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shoppingcart', {
    templateUrl: 'shoppingcart/shoppingcart.html',
    controller: 'shoppingcartController'
  });
}])

.controller("shoppingcartController", function($scope, $http) {
	$scope.remove = function(index) {
		$scope.myCartItems.splice(index, 1);
	}
});

