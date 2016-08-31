'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('NewCtrl', function ($scope, $timeout) {

    var defecto = {};

    this.addContact = function(request){
      ContactsList.push(request);
      $scope.guardado = " Saved";
      $scope.contact = angular.copy(defecto);
      $timeout(change_guardado, 1500);
    };

    var change_guardado = function() {
      $scope.guardado = "";
    };

  });
