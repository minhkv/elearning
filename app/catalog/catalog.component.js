'use strict';

angular.module('catalog', ['ngRoute'])
.component('catalog', {
    templateUrl: 'catalog/catalog.template.html',
    controller: ['Course',
      function CatalogController(Course) {
      	var self = this;
        Course.query().$promise.then(function(data) {
        	self.courses = data;
        });
      }
    ]
});
