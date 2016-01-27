angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/favorites', {templateUrl: 'partials/favorites.html', controller: 'myCtrl'});
  $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: 'myCtrl'});
  $routeProvider.otherwise({redirectTo: '/favorites'});
}]);
