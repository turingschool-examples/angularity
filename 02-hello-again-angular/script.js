var Application = angular.module('Application', []);

Application.controller('HelloController', ['$scope', function ($scope) {
  $scope.greeting = 'Hello';
}]);
