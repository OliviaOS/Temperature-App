/* Custom Directives: for weather panel to show daily weather forecast*/

angular.module('myApp.directives', [])

  .directive('weatherPanel',[function factory() {
    return {
      restrict: 'EA',

      scope: {
        useDayforecast: '=showEntry',
        forecast: '=weatherPanel'
      },

      templateUrl: 'partials/weatherPanel.html',

      link: function(scope, element, attrs) {
        // Get icon image url
        scope.getIconImageUrl = function(iconName) {
          return (iconName ? 'http://openWeatherMap.org/img/w/' + iconName + '.png' : '');
        };

        scope.parseDate = function (time) {
          return new Date(time * 1000);
        };
      }
    }
  }])

