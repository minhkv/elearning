'use strict';

angular.module('services.course', ['ngResource'])
.factory('Course', ['$resource',
    function($resource) {
      return $resource('http://localhost:3000/course/:username', {}, {
        query: {
          method: 'GET',
          isArray: true
        },
        getByUsername: {
        	method: 'GET',
        	isArray: true
        }
      });
    }
  ]);