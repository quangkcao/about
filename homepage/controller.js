define([], function() {
	return ['$scope', 'settings', 'utils', 'settings', '$window', '$location', '$cookies', '$http' , function($scope, settings, utils, settings, $window, $location, $cookies, $http) {
		$scope.settings = settings
		$scope.utils = utils

		$http.get('data/author.json').success(function(data) {
	        $scope.author = data.author;
	        $scope.experiences = data.experiences;
	        $scope.educations = data.educations;
	        $scope.certifications = data.certifications;
	    });   

		$scope.$apply();
	}]
})