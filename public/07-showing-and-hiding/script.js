var Application = angular.module('Application', []);

Application.controller('AdditionController', function ($scope) {
  $scope.addend = 0;

  $scope.visibilityState = false;
  $scope.toggleVisibility = function () {
    $scope.visibilityState = !$scope.visibilityState;
  };

  $scope.$watch('addend', function () {
    $scope.sum = 2 + $scope.addend;
  });
});

Application.controller('TipController', function ($scope) {
  $scope.billAmount = 0;
  $scope.tipPercentage = 20;

  $scope.visibilityState = false;
  $scope.toggleVisibility = function () {
    $scope.visibilityState = !$scope.visibilityState;
  };

  function calculateTip() {
    $scope.tipAmount = $scope.billAmount * ($scope.tipPercentage / 100);
  }

  function calculateBillAmount() {
    $scope.totalBill = $scope.billAmount + $scope.tipAmount;
  }

  $scope.$watchGroup(['billAmount', 'tipPercentage'], calculateTip);
  $scope.$watchGroup(['billAmount', 'tipAmount'], calculateBillAmount);

  $scope.$watch('tipPercentage', function () {
    $scope.cheapskate = $scope.tipPercentage < 15;
  });

  // Your Turn: Can you display a message when someone decides to be a
  // cheapskate and tip less than 15%?
});

Application.controller('CartController', function ($scope) {
  $scope.items = [
    { title: 'Widgets', quantity: 5, price: 3.95 },
    { title: 'Dohickeys', quantity: 3, price: 8.95 },
    { title: 'Whatchamacallits', quantity: 7, price: 1.95 }
  ];

  $scope.visibilityState = false;
  $scope.toggleVisibility = function () {
    $scope.visibilityState = !$scope.visibilityState;
  };

  function updateOrderTotal() {
    $scope.orderTotal = $scope.items.reduce(function (total, item) {
      return total + (item.price * item.quantity);
    }, 0);
  }

  $scope.$watch('items', updateOrderTotal, true);
});
