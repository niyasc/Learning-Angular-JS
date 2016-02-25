var app = angular.module("main", ['angularBetterPlaceholder', 'ngMockE2E', 'ngRoute']);

app.run(function($httpBackend) {

    $httpBackend.whenPOST('/login').respond(function(method, url, data) {
        var details = angular.fromJson(data);
        if (details.email == "test@test.com" && details.password == "test")
            return [200, {
                loggedIn: true,
                userId: 'user123'
            }, {}];
        else
            return [200, {
                loggedIn: false
            }, {}];
    });

});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    }).otherwise({
        redirectTo: '/login'
    });
    
    $locationProvider.html5Mode(true);
}]);

app.controller("LoginController", ['$scope', '$http', function($scope, $http) {
    $scope.data = {};
    $scope.loading = false;
    $scope.postResult = 0;

    $scope.submit = function() {
        $scope.loading = true;
        $http.post('/login', $scope.data).success(function(data) {
            if (data.loggedIn == true)
                $scope.postResult = 1;
            else
                $scope.postResult = 2;
        });
        $scope.loading = false;
    };
}]);

app.controller("MainController", ['$scope', function($scope) {

}]);