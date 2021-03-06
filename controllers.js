'use strict';

define(['angular', 'services'], function (angular) {

	/* Controllers */
	
	//return angular.module('myApp.controllers', ['myApp.services'])
	return angular.module('about.controllers', ['about.services'])
		.controller('MainController', ['$scope', '$injector', function($scope, $injector){
			require(['homepage/homepage-controller'], function(ctrl) {
				$injector.invoke(ctrl, this, {'$scope': $scope});
			});
		}])
});