(function(){
	var app = angular.module('myQuiz', []);


	app.controller('QuizController', ['$scope', '$http', '$sce', function($scope, $http, $sce){
		$scope.score = 0;
		$scope.activeQuestion = -1;
		$scope.activeQuestionAnswered = 0;
		$scope.percentage = 0;

		$http.get('quiz_data.json').success(function(quizData) {
			$scope.myQuestions = quizData;
			$scope.totalQuestions = $scope.myQuestions.length;
		});
	}]);
})();
