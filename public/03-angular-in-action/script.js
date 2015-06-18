var Application = angular.module('Application', []);

Application.controller('HelloController', function ($scope) {
  $scope.greeting = 'Hello';
});

Application.controller('MeatballController', function ($scope) {

  $scope.adjective = 'spicy';

  $scope.change = function (adjective) {
    $scope.adjective = adjective;
  }

  // Your turn: Can you add one more additional button here?
  // Bonus: Let's abstract everything out to a reusable function!
});
