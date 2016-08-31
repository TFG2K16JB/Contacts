'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the contactsApp
 */
angular.module('contactsApp')
  .controller('MainCtrl', function () {

    var ourLocation = document.URL;

    if (ourLocation === "http://localhost:9000/#/new"){
      this.tab = 4;
    } else if (ourLocation === "http://localhost:9000/#/search"){
      this.tab = 3;
    } else if (ourLocation === "http://localhost:9000/#/contacts"){
      this.tab = 2;
    } else {
      this.tab = 1;
    };

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });
