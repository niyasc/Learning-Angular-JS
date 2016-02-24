var myApp = angular.module('myApp', []);

myApp.controller('MyController',['$scope', '$http', function($scope, $http) {
  $scope.artists = $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
  });
}]);