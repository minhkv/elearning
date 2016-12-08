'use strict';

angular.module('course', ['ngRoute'])
.component('course', {
    templateUrl: 'course/course.template.html',
    controller: ['Course',
      function CourseController(Course) {
      	var self = this;
        Course.query().$promise.then(function(data) {
        	self.courses = data;
        });
      }
    ]
});
