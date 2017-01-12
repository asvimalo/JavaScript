//Lab 6
var App = angular.module("App", ['ngRoute']);

App.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            //controller: "fruitController",
            templateUrl: "../PartialViews/Home.html"
        })
        .when('/Bananas', {
            //controller: "fruitController",
            template: "<h3>Banana is good for you</h3>"
        })
        .when('/Apples', {
            //controller: "fruitController",
            template: "<h3>Apples are good for your helth</h3>"
        })
        .when('/Oranges', {
            //controller: "fruitController",
            template: "<h3>Oranges have a lot of vitamin C</h3>"
        })
        .when('/Pears', {
            //controller: "fruitController",
            template: "<h3>Pears contains a lot of water</h3>"
        })
        .when('/Coconut', {
            //controller: "fruitController",
            template: "<h3>Coconuts must be hard</h3>"
        })
        .otherwise({
            redirectTo: '/'
        })
});



App.controller("fruitController", function($scope){
    
        $scope.X = function(){}
    });