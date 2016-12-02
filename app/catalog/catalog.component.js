'use strict';

angular.module('catalog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/catalog', {
    templateUrl: 'catalog/catalog.template.html',
    controller: 'CatalogCtrl'
  });
}])

.controller('CatalogCtrl', [function() {

}]);