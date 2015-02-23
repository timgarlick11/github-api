var app = angular.module('gitHubApi')
 



app.controller('myController', function($scope, myService) {

$scope.getUserData = function() {

	myService.getUser($scope.userName).then(function(results) {
		console.log(results)
		$scope.user = results.data
		$scope.userName = '';
	})
}

})