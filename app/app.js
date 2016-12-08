'use strict';

// Declare app level module which depends on views, and components
angular.module('elearning', [
	'ngRoute',
	'ngResource',
	'home',
	'signin',
	'signup',
	'learn',
	'catalog',
	'course',
	'services',
	'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.when('/home', {
		template: '<home></home>'
	});
	$routeProvider.when('/signup', {
		template: '<signup></signup>'
	});
	$routeProvider.when('/signin', {
		template: '<signin></signin>'
	});
	$routeProvider.when('/learn', {
		template: '<learn></learn>'
	});
	$routeProvider.when('/course', {
		template: '<course></course>'
	});
	$routeProvider.when('/catalog', {
		template: '<catalog></catalog>'
	});
	$routeProvider.when('/course', {
		template: '<course></course>'
	});
	$routeProvider.otherwise({redirectTo: '/signin'});
}]);
