var Application = angular.module('Application', []);

Application.controller('PresidentsController', function ($scope, $http) {

  var presidents = [];

  $http.get('/api/presidents')
       .success(function (response) {
         $scope.presidents = presidents = response;
       });

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

});
