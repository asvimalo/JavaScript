
//When Document is Ready:

$(document).ready(function(){
    $("#messageDiv").hide();
    $("#loggedUser").hide();
    



});

/////////////////////////////////////////////////////
//                                                 //
/////////////////////////////////////////////////////

//Create App angular module

var App = angular.module("App",['ngRoute']);

//Create route

App.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false})
    .hashPrefix('!');

    $routeProvider 
    .when('/', {
        controller: "userControler",
        templateUrl: "/Login.html"
    })
    .when('/index' , {
        controller: "userControler",
        templateUrl: "/index.html"
    })
});

//Create a Factory 

App.factory("mediaFactory",function(){

    var Users = [{Name: "Admin", Username:"admin", Password: "P@ssw0rd"},
                 {Name: "Mario", Username:"mario", Password: "P@ssw0rd"},
                 {Name: "Angel", Username:"angel", Password: "P@ssw0rd"},
                 {Name: "Andres", Username:"andres", Password: "P@ssw0rd"},
                 {Name: "Maria", Username:"maria", Password: "P@ssw0rd"}
    ];

    var Movies = [{Title: "Star Wars", Year: 2010-01-01},
                  {Title: "Insanity", Year: 2011-01-01},
                  {Title: "Abierto hasta el amanecer", Year: 2015-01-01},
                  {Title: "Locuras", Year: 2014-01-01},
                  {Title: "Amor a quema ropa", Year: 2013-01-01},
                  {Title: "Los dientes de la abuela", Year: 2010-01-01},
                  {Title: "Paralisas", Year: 2010-01-01},
                  {Title: "Front Walker", Year: 2010-01-01},
                  {Title: "Todo o Nada", Year: 2010-01-01},
                  {Title: "Aqui te pillo a qui te mato", Year: 2010-01-01}];
    
    var factory = {};

    factory.getMovies = function(){
        console.log("In i get movies factory");
        return Movies;
    };

    factory.getUsers = function(){
        console.log("In i get users factory");
        return Users;
    };

    factory.getUserByUsernameAndPass = function(user){

        dfd = $.Deferred();
        isValidUser = false;

        $.each(Users, function(key,value){
           if(value.Username===user.Username  && value.Password === user.Password)
           {
               isValidUser = true; 
     
           }
         
        });
        if(isValidUser) {
            dfd.resolve();
        }
        else {
            dfd.reject();
        }
        return dfd.promise();

        
    };

    return factory;
});

var controllers = {};

controllers.userController = function($scope,$location ,mediaFactory){

        $scope.Users = mediaFactory.getUsers();
            
       
        $scope.getAllUsers= function(){
            
            console.log("In i get all Users");
            //document.getElementById("DivOutputUsers").style.display = "block";
            return mediaFactory.getUsers();
            $("#DivOutputUsers").toggle();
        };

        $scope.logIn = function(){
            
            mediaFactory.getUserByUsernameAndPass({
                Name: "",
                Username: $scope.userName,
                Password: $scope.password

            }).then(function(){
                    var text = "";
                    if(window.localStorage.Username === null || window.localStorage.Username === null){
                        var isCheckBoxState = $scope.checkboxModel;

                        if(isCheckBoxState) {

                                window.localStorage.Username($scope.userName);
                                window.localStorage.Password($scope.password);
                            }
                            else {
                                window.sessionStorage.setItem("Username", $scope.userName);//Did a session in case checkbox uncheck
                            }
                    }
                    else {
                        $scope.userName = window.localStorage.Username;
                        $scope.password = window.localStorage.Password;

                    }
                    
               
                    window.alert("Succefully logged in");
                    //window.location.path("/Start");
                    $location.path('/index');
                    $location.replace();
                    
                    $scope.userLogged = "Logged in as: " + $scope.userName;//Check this out, DOM not instantiated TODO
                    $("loggedUser").show();
            }, function(){
            
                    $scope.message = "The combination of user and password did not match. Please try again!";
                    $("messageDiv").show();
            });
        }
};

controllers.movieController = function($scope, mediaFactory){

     $scope.Movies = mediaFactory.getMovies();
     $scope.getAllMovies = function(){
        $("#DivOutputMovies").toggle();
        console.log("In i get all movies");
        //ocument.getElementById("DivOutputMovies").style.display = "block";
        
     };

};

App.controller(controllers);

