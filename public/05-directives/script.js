var Application = angular.module('Application', []);

Application.controller('CartController', function ($scope) {
  $scope.items = [
    { title: 'Widgets', quantity: 5, price: 3.95, created: new Date() },
    { title: 'Dohickeys', quantity: 3, price: 8.95, created: new Date() },
    { title: 'Whatchamacallits', quantity: 7, price: 1.95, created: new Date() }
  ];

  $scope.addItem = function (title, quantity, price) {
    $scope.items.push({
      title: title,
      quantity: quantity,
      price: price,
      created: new Date()
    });
  };

  // Your turn:
  //   - Can you add a form and button that adds a new item?
  //   - Can you use the date filter to format the `created` property?
  //     (https://docs.angularjs.org/api/ng/filter/date)
});
