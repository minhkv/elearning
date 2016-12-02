'use strict';

angular.module('signup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.template.html',
    controller: 'SignUpCtrl'
  });
}])

.controller('SignUpCtrl', [function() {

}]);