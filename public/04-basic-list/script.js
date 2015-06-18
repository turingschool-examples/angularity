var Application = angular.module('Application', []);

Application.controller('ListController', function ($scope) {
  $scope.newItem = '';
  $scope.items = ['pizza', 'veggie burgers'];

  $scope.add = function () {
    if ($scope.items.indexOf($scope.newItem) === -1) {
      $scope.items.push($scope.newItem);
      $scope.newItem = '';
    } else {
      alert('You cannot put duplicate items in here!');
    }
  };

  $scope.clear = function () {
    $scope.items = [];
  };

  // Your turn: Can you add a button that clears the entire list?
});
