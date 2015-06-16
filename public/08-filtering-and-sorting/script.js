var Application = angular.module('Application', []);

// FYI, we have a list of presidents in another file. They're stored in the
// `presidents` variable. So, there is no black magic here or anything.

Application.controller('PresidentsController', ['$scope', function ($scope) {

  $scope.presidents = presidents;

  $scope.$watch('presidentsFilter', function () {
    if ($scope.presidentsFilter) {
      var searchTerm = $scope.presidentsFilter.toLowerCase();

      $scope.presidents = presidents.filter(function (president) {
        return president.name.toLowerCase().match(searchTerm);
      });
    } else {
      $scope.presidents = presidents;
    }
  });

  // Your Turn: Can you try one of the following?
  //   - Filtering by the start or end year
  //   - Sorting by the start or end year
  //   - Sorting by the length of the president's term

}]);
