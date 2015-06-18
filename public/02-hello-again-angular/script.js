var Application = angular.module('Application', []);

Application.controller('HelloController', function ($scope) {
  $scope.greeting = 'Goodbye';
  $scope.target = 'world';
});

// Your turn: Can you create a scope property that is bound to "world"?
// So, you have in input field that changes the greeting. Make one that
// also changes the target.
