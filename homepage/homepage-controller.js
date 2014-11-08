define([], function() {
	return ['$scope', 'settings', 'utils', 'settings', '$window', '$location', '$cookies', '$http' , function($scope, settings, utils, settings, $window, $location, $cookies, $http) {
		$scope.settings = settings
		$scope.utils = utils

		$scope.author = {
			name:'Quang Cao',
			desc: 'Full-stack engineer delights people with fully interactive and cross-platform websites using latest modern web technology stacks.',
			linkedin:'http://goo.gl/kelsy3',
			twitter:'http://goo.gl/IyoXoA'
		} 

		$scope.experiences = [{
			company:'OfferUp',
			website:'http://goo.gl/MkTLZu',
			title:'UI/UX Developer',
			period:'July 2012 - Present'
		},{
			company:'Idea Entity',
			website:'http://goo.gl/37rcjE',
			title:'Sr. Web Developer',
			period:'April  2012 - June 2012'
		},{	
			company:'RunBusi',
			website:'',
			title:'Web Developer/ Designer/ Freelancer',
			period:'2009 - July 2012'
		},{	
			company:'MSV',
			website:'http://goo.gl/zLWfKS',
			title:'PHP Developer',
			period:'Septemper 2007 - March 2008'
		}]

		$scope.educations = [{
			school:'Central Washington University',
			degree:'BS Business and Supply Chain Management',
			period:'2012 - 2014'
		},{
			school:'Hue University',
			degree:'BS Computer Science',
			period:'2003 - 2007'
		},{	
			school:'Shoreline Community College',
			degree:'AA Business Administration',
			period:'2010 - 2012'
		}]

		$scope.certifications = [{
			school:'Zend Technologies, Inc',
			cert:'Zend Certified Engineer PHP',
			period:'2012'	
		}]

		$scope.$apply();
	}]
})