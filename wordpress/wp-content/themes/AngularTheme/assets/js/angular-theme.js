var app = angular.module("wpAngularTheme", ['ui.router', 'ngResource']);

app.factory('Posts', function($resource) {
   return $resource(appInfo.api_url + '/posts/:ID', {
       ID: '@id'
   }); 
});

app.controller('ListController', ['$scope', 'Posts', function($scope, Posts) {
    console.log('ListController');
    $scope.page_title = "Blog Listing";
    Posts.query(function (res) {
       $scope.posts = res;
    });
}]);

app.config(function($stateProvider, $urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
   $stateProvider
   .state('list', {
       url: '/',
       controller: 'ListController',
       templateUrl: appInfo.template_directory + 'templates/list.html'
   });
});