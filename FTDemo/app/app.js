
    var app = new angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "<h1>Banana<h1>"
        }) 
        .when("Main.html", {
            templateUrl: "<h1>Main.html<h1>"
        }) 
        .when("/Main.Html", {
            templateUrl: "<h1>Slash Main.html<h1>"
        })
            .otherwise({
                templateUrl: "<h1>Otherwise<h1>"
            })
           
    });

   

  

