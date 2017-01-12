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
            templateUrl: "../PartialViews/Bananas.html"
        })
        .when('/Apples', {
            //controller: "fruitController",
            templateUrl: "../PartialViews/Apples.html"
        })
        .when('/Oranges', {
            //controller: "fruitController",
            templateUrl: "../PartialViews/Oranges.html"
        })
        .when('/Pears', {
            //controller: "fruitController",
            templateUrl: "../PartialViews/Pears.html"
        })
        .when('/Coconut', {
            //controller: "fruitController",
            templateUrl: "../PartialViews/Coconut.html"
        })
        .otherwise({
            redirectTo: '/'
        })
});



App.controller("fruitController", function($scope){
    
        $scope.X = function(){}
    });