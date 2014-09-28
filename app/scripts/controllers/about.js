'use strict';

/**
 * @ngdoc function
 * @name timeLogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the timeLogApp
 */
angular.module('timeLogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
