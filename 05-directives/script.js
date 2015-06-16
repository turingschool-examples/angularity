var Application = angular.module('Application', []);

Application.controller('CartController', ['$scope', function ($scope) {
  $scope.items = [
    { title: 'Widgets', quantity: 5, price: 3.95 },
    { title: 'Dohickeys', quantity: 3, price: 8.95 },
    { title: 'Whatchamacallits', quantity: 7, price: 1.95 }
  ];

  // Your turn: Can you add a form and button that adds a new item?
}]);
