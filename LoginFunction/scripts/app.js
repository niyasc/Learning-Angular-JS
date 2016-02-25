var app = angular.module("main", ['angularBetterPlaceholder', 'ngMockE2E']);

app.run(function ($httpBackend) {

    $httpBackend.whenPOST('/login').respond(function (method, url, data) {
        var details = angular.fromJson(data);
        if (details.email == "test@test.com" && details.password == "test")
            return [200, { loggedIn: true, userId: 'user123' }, {}];
        else
            return [200, { loggedIn: false }, {}];
    });

});

app.controller("formCtrl", ['$scope', '$http', function ($scope, $http) {
    $scope.data = {};
    $scope.loading = false;
    $scope.submit = function () {
        $scope.loading = true;
        var i = 1000;
        while(i-- > 0);
        $http.post('/login', $scope.data).success(function (data) {
            console.log("hi" + data);
        });
        $scope.loading = false;
    };
}]);