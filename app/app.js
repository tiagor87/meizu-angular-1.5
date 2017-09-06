'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.accessories',
    'myApp.product',
    'myApp.shoppingCart',
    'myApp.forum',
    'myApp.wheretobuy',
    'myApp.version',
    'ngRoute',
    'slideshow',
    'json'
  ])
  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'index.html'
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
        .otherwise({ redirectTo: '/' });
    }
  ]);
