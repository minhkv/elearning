'use strict';

// Declare app level module which depends on views, and components
angular.module('elearning', [
	'ngRoute',
	'home',
	'signin',
	'signup',
	'learn',
	'catalog',
	'myApp.view2',
	'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	
	$routeProvider.otherwise({redirectTo: '/'});
}]);
