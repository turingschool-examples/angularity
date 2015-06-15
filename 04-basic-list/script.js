var Application = angular.module('Application', []);

Application.controller('ListController', ['$scope', function ($scope) {
  $scope.newItem = '';
  $scope.items = ['pizza', 'veggie burgers'];

  $scope.add = function () {
    $scope.items.push($scope.newItem);
    $scope.newItem = '';
  };

  // Your turn: Can you add a button that clears the entire list?
}]);
