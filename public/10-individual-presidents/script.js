var Application = angular.module('Application', []);

Application.controller('PresidentsController', function ($scope, $http) {

  var presidents = [];

  $http.get('/api/presidents')
       .success(function (response) {
         $scope.presidents = presidents = response;
       });

  $scope.addPresident = function () {
    $http.post('/api/presidents', $scope.newPresident)
         .success(function (response) {
           presidents.push(response);
         });
  };

  $scope.showPresident = function (president) {
    $scope.currentPresident = president;
  };

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
