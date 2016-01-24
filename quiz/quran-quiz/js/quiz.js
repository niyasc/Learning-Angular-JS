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

		$scope.selectAnswer = function(qIndex, aIndex){
			var questionState = $scope.myQuestions[qIndex].questionState;
			if(questionState != 'answered') {
				$scope.myQuestions[qIndex].selectAnswer = aIndex;
				var correctAnswer = $scope.myQuestions[qIndex].correct;
				$scope.myQuestions[qIndex].correctAnswer = correctAnswer;
				if(correctAnswer === aIndex) {
					$scope.myQuestions[qIndex].correctness = 'correct';
					$scope.score += 1;
				} else {
					$scope.myQuestions[qIndex].correctness = 'incorrect';
				}
				$scope.myQuestions[qIndex].questionState = 'answered';
			}
			$scope.percentage = (($scope.score / $scope.totalQuestions) * 100).toFixed(2);
		};

		$scope.isSelected = function(qIndex, aIndex) {
			return $scope.myQuestions[qIndex].selectAnswer === aIndex;
		};

		$scope.isCorrect = function(qIndex, aIndex) {
			return $scope.myQuestions[qIndex].correctAnswer === aIndex;
		};

		$scope.selectContinue = function() {
			return $scope.activeQuestion += 1;
		}

		$scope.createShareLinks = function(percentage) {
			var url="http://codifydesign.com";
			var emailLink = '<a href="mailto:?subject=Try to beat my score!&amp;body=I scored a '+percentage+'% on this \
			quiz about Saturn. Try to beat my score " target="_blank" class="btn email">Email a friend</a> ';
			var twitterLink = '<a href="http:/twitter.com/share?text=I scored a '+percentage+'% on this \
			quiz about Saturn. Try to beat my score" target="_blank" class="btn twitter">Tweet your score</a>';

			var newMarkup = emailLink + twitterLink;
			return $sce.trustAsHtml(newMarkup);
		}
	}]);
})();
