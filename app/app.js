'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.product',
  'myApp.shoppingcart',
  'myApp.accessories',
  'myApp.forum',
  'myApp.wheretobuy',
  'myApp.version',
  "ngRoute", 
  "slideshow", 
  "json"
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
  		.when('/', {
            templateUrl: 'index.html'
        })
        .when('/product', {
            templateUrl: 'product/product.html'
        })
        .when('/accessories', {
            templateUrl: 'accessories/accessories.html'
        })
        .when('/wheretobuy', {
            templateUrl: 'wheretobuy/wheretobuy.html'
        })
        .when('/forum', {
            templateUrl: 'forum/forum.html'
        })
        .when('/shoppingcart', {
            templateUrl: 'shoppingcart/shoppingcart.html'
        })
        .otherwise({redirectTo: '/'});
}]);
