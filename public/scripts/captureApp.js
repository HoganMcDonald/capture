var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/partials/login.html',
    controller: 'AuthController'
  }).when('/register', {
    templateUrl: 'views/partials/register.html',
    controller: 'AuthController'
  }).when('/capture', {
    templateUrl: 'views/partials/capture.html'
  });
});
