(function() {
    'use strict';
}());

angular.module("myApp.wheretobuy", ["myApp"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wheretobuy', {
    templateUrl: 'wheretobuy/wheretobuy.html',
    controller: 'wheretobuyController'
  });
}])

.controller("wheretobuyController", function($scope) {
        // online stores
        $scope.tab = 1;

        $scope.setTab = function(newTab) {
            $scope.tab = newTab;
        };

        $scope.isSet = function(tabNum) {
            return $scope.tab === tabNum;
        };

        // offline stores
        $scope.offTab = 1;
        $scope.offlineTab = function(newOfflineTab) {
            $scope.offTab = newOfflineTab;
        };

        $scope.offlineIsSet = function(offlineTabNum) {
            return $scope.offTab === offlineTabNum;
        };

        var shop = {

            amazon: "assets/images/amazon.jpg",
            amazon_france: "assets/images/amazonfr.jpg",
            amazon_uk: "assets/images/amazon-uk.jpg",
            bug: "assets/images/bug.jpg",
            cdiscount: "assets/images/cdiscount.jpg",
            e_ton: "assets/images/e-ton.jpg",
            israel_meizu: "assets/images/israel.jpg",
            snapdeal: "assets/images/snapdeal.jpg",
            meizu_france: "assets/images/meizu-fr.jpg",
            meizu_brazil: "assets/images/meizu-brazil.jpg",
            meizu_espana: "assets/images/meizu-espana.jpg",
            meizumart: "assets/images/meizumart.jpg",
            meizu_russia: "assets/images/meizu-russia.jpg",
            meizu_spain: "assets/images/meizu-spain.jpg",
            pb: "assets/images/pb.jpg",
            pixelphone: "assets/images/pixelphone.jpg",
            pixmania: "assets/images/pixmania.jpg",
            ruducommerce: "assets/images/ruducommerce.jpg",
            topresellerstore: "assets/images/topresellerstore.jpg",
            untpvc: "assets/images/untpvc.jpg"

        };

        $scope.shop = shop;

    });

