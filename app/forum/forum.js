'use strict';

angular.module('myApp.forum', ['myApp'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forum', {
    templateUrl: 'forum/forum.html',
    controller: 'forumController'
  });
}])

.controller("forumController", function($scope, $http) {
    $http.get('assets/names.json')
        .then(function(res) {
            $scope.comments = res.data;
        })

        $scope.options = [{
            id: 1,
            country: "Angola"
        }, {
            id: 2,
            country: "Argentina"
        }, {
            id: 3,
            country: "België"
        }, {
            id: 4,
            country: "Brazil"
        }, {
            id: 5,
            country: "Canada"
        }, {
            id: 6,
            country: "Deutschland"
        }, {
            id: 7,
            country: "Ghana"
        }, {
            id: 8,
            country: "Indonesia"
        }, {
            id: 9,
            country: "Italy"
        }, {
            id: 10,
            country: "Mexico"
        }, {
            id: 11,
            country: "Portugal"
        }, {
            id: 12,
            country: "Qaṭar"
        }, {
            id: 13,
            country: "Россия"
        }, {
            id: 14,
            country: "USA"
        }, {
            id: 15,
            country: "中国"
        }, {
            id: 16,
            country: "香港"
        }, {
            id: 17,
            country: "日本"
        }, {
            id: 18,
            country: "新加坡"
        }, {
            id: 19,
            country: "한국"
        }];
    
        $scope.comments = JSON.parse(localStorage.getItem('apple'));

        $scope.addComment = function(dataObject) {

        if (dataObject) {
            this.comments.push({
                "name": dataObject.name,
                "country": dataObject.country,
                "comment": dataObject.comment
            });
            localStorage.setItem('apple', JSON.stringify(this.comments));
        } else {
            console.log("Form is not valid");
        }
        // window.localStorage.setItem('apple', JSON.stringify(dataObject));
};
});