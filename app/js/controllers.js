/* Controllers */

angular.module('myApp.controllers', [])

  // Controller for "open weather map" api data search
  .controller('myCtrl',
    ['$scope','openWeatherMap','egLocations','ISO3166',
      function($scope,openWeatherMap,egLocations,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';

    // Expose example locations to $scope
    $scope.egLocations = egLocations;
    $scope.iconBaseUrl = 'http://openWeatherMap.org/img/w/';

    // On initialization load data for first example entry
    $scope.forecast = openWeatherMap.queryforecastDaily({
      location: egLocations[ 0 ]
    });

    // Get forecast data for location as given in $scope.location
    $scope.getforecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please type in City Name ! ';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryforecastDaily({
        location: $scope.location
      });
    };

    // Set $scope.location and execute search on API
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getforecastByLocation();
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
