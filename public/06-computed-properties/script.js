var Application = angular.module('Application', []);

Application.controller('AdditionController', function ($scope) {
  $scope.addend = 0;

  $scope.$watch('addend', function () {
    $scope.sum = 2 + $scope.addend;
  });
});

Application.controller('TipController', function ($scope) {
  $scope.billAmount = 0;
  $scope.tipPercentage = 20;

  function calculateTip() {
    $scope.tipAmount = $scope.billAmount * ($scope.tipPercentage / 100);
  }

  $scope.$watchGroup(['billAmount', 'tipPercentage'], calculateTip);

  // Your Turn: Can you implement a computed property that updates the total
  // bill (bill amount + tip amount)?
});

Application.controller('CartController', function ($scope) {
  $scope.items = [
    { title: 'Widgets', quantity: 5, price: 3.95 },
    { title: 'Dohickeys', quantity: 3, price: 8.95 },
    { title: 'Whatchamacallits', quantity: 7, price: 1.95 }
  ];

  function updateOrderTotal() {
    $scope.orderTotal = $scope.items.reduce(function (total, item) {
      return total + (item.price * item.quantity);
    }, 0);
  }

  $scope.$watch('items', updateOrderTotal, true);
});
