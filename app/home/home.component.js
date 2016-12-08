'use strict';

angular.module('home', ['ngRoute'])
.component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['Course',
      function HomeController(Course) {
      	var self = this;
        Course.query().$promise.then(function(data) {
        	self.courses = data;
        });
      }
    ]
});
