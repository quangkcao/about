'use strict';

define(['angular', 'app'], function(angular, app) {

	return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when("/",{
				templateUrl: "apps/about/homepage/homepage.html",
				controller: "MainController",
				controllerAs: "Ctrl"
			})
		$routeProvider.otherwise({redirectTo: '/'});
	}]);

});