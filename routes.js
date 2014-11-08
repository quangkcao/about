'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when("/",{
				templateUrl: "homepage/homepage.html",
				controller: "MainController",
				controllerAs: "Ctrl"
			})
		$routeProvider.otherwise({redirectTo: '/'});
	}]);

});