(function() {
    'use strict';
}());

angular.module("myApp.product", ["myApp"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product', {
    templateUrl: 'product/product.html', 
    controller: 'productController'
  });
}])

.controller("productController", function($scope, $http) {
 	$http.get('assets/smartphone.json')
 		.then(function(res) {
 			$scope.phones = res.data;
 		}); 

 	$scope.addProduct = function(phone) {
 		$scope.phones.push(phone);
 		$scope.phone = {};
 	};
 	
 	$scope.myCartItems = [];

 	$scope.addToCart = function(phone) {
 		$scope.myCartItems.push(phone);
 	} 
});

