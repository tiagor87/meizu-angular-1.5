(function() {
    'use strict';
}());


angular.module("slideshow", ["myApp", "ngAnimate"])
    .controller("SlideShowController", function($scope, $timeout) {

        $scope.images = [{
            src: "assets/images/image01.jpg"
        }, {
            src: "assets/images/image02.jpg"
        }, {
            src: "assets/images/image03.jpg"
        }];

        $scope.imgIndex = 0;
        $timeout(function advanceSlide() {
            $scope.imgIndex = ($scope.imgIndex + 1) % $scope.images.length;
            $timeout(advanceSlide, 2700);
        });
    });