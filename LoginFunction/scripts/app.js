var app = angular.module("main", ['angularBetterPlaceholder', 'ngMockE2E', 'ngRoute', 'ngAnimate']);

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

    $httpBackend.whenGET(/partials\/.*/).passThrough();

});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
    }).when('/report', {
        templateUrl: 'partials/report.html',
        controller: 'ReportController',
        resolve: {
            reportData: ['$http', function($http) {
                return $http.get('partials/report.json').then(function(data) {
                    return data.data;
                });
            }]
        }
    }).otherwise({
        redirectTo: '/login'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
}]);

app.service('UserData', function() {
    var data = {
        email: '',
        password: ''
    };
    return data;
});

app.controller("LoginController", ['$scope', '$http', '$location', 'UserData', function($scope, $http, $location, UserData) {
    $scope.data = UserData;
    $scope.loading = false;
    $scope.postResult = 0;

    $scope.submit = function() {
        $scope.loading = true;
        $http.post('/login', $scope.data).success(function(data) {
            if (data.loggedIn == true) {
                $scope.postResult = 1;
                $location.url('/report');
            }
            else
                $scope.postResult = 2;
        });
        $scope.loading = false;
    };
}]);

app.controller("MainController", ['$scope', function($scope) {

}]);

app.controller("ReportController", ['$scope', 'reportData', 'UserData', function($scope, reportData, UserData) {
    $scope.data = reportData;
    $scope.userData = UserData;
}]);