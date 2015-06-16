var Application = angular.module('Application', []);

Application.controller('HelloController', ['$scope', function ($scope) {
  $scope.greeting = 'Hello';
}]);

Application.controller('MeatballController', ['$scope', function ($scope) {

  $scope.adjective = 'spicy';

  $scope.changeToSaucy = function () {
    $scope.adjective = 'saucy';
  };

  $scope.changeToSpicy = function () {
    $scope.adjective = 'spicy';
  };

  // Your turn: Can you add one more additional button here?
  // Bonus: Let's abstract everything out to a reusable function!
}]);
