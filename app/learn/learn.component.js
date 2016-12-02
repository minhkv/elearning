'use strict';

angular.module('learn', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/learn', {
    templateUrl: 'learn/learn.template.html',
    controller: 'LearnCtrl'
  });
}])

.controller('LearnCtrl', [function() {

}]);