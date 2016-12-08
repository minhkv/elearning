'use strict';

angular.module('learn', ['ngRoute'])
.component('learn', {
    templateUrl: 'learn/learn.template.html',
    controller: ['Course',
      function LearnController(Course) {
      	var self = this;
        Course.query().$promise.then(function(data) {
        	self.courses = data;
        });
      }
    ]
});
