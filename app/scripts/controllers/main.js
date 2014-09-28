'use strict';

/**
 * @ngdoc function
 * @name timeLogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the timeLogApp
 */
angular.module('timeLogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
