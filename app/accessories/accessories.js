(function() {
    'use strict';
}());

var accessories = angular.module("accessories", ["ngAnimate"]);

angular.module('myApp.accessories', ['myApp'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accessories', {
    templateUrl: 'accessories/accessories.html',
    controller: 'accessoriesController'
  });
}])


accessories.directive("scroll", function($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset > 10) {
                scope.boolChangeClass = true;
            }
            if (this.pageYOffset > 170) {
                scope.imageAnimateDown = true;
            }
            scope.$apply();
        });
    };
});





