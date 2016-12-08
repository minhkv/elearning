'use strict';

angular.module('signin', ['ngRoute'])
.component('signin', {
    templateUrl: 'signin/signin.template.html',
    controller: ['Course',
      function SignInController(Course) {
      	var self = this;
        Course.query().$promise.then(function(data) {
        	self.courses = data;
        });
      }
    ]
});
