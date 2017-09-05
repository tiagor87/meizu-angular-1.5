(function() {
    'use strict';
}());

angular.module("json", ["myApp"])
.controller("PhonesController", function($scope, $http) {
    $http.get("js/smartphone.json")
        .success(function(response) {
            // console.log(response.smartphones);
            $scope.infos = response.smartphones;
        });

    $scope.infos = [];

  	$scope.addProduct = function() {
  		$scope.infos.push(info);
  		$scope.alt_image = "";
  		$scope.price = "";
  		$scope.image = "";
  		console.log($scope.infos);
  	}
});