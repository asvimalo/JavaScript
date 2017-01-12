
angular.module('ScopeEx', [])
    .controller('CarController', ['$cope', function($scope){
        $scope.cars = [{
            carId: 1,
            carBrand: "Volvo",
            carModel: "XC90",
            modelYear: 2016
        },
        {
            carId: 2,
            carBrand: "Volkswagen",
            carModel: "Golf TDI 2.0",
            modelYear: 2015
        },
        {
            carId: 3,
            carBrand: "Mercedes Benz",
            carModel: "500L",
            modelYear: 2013
        },
        {
            carId: 4,
            carBrand: "Fiat",
            carModel: "Punto",
            modelYear: 2014
        },
        {
            carId: 5,
            carBrand: "Renault",
            carModel: "Clio",
            modelYear: 2015
        },
        {
            carId: 6,
            carBrand: "Tesla",
            carModel: "S",
            modelYear: 2017
        },
        {
            carId: 7,
            carBrand: "Alfa Romeo",
            carModel: "S",
            modelYear: 2017
        }]
    }]);