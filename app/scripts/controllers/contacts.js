'use strict';

/**
 * @ngdoc function
 * @name contactsApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the contactsApp
 */
 angular.module('contactsApp')
  .controller('ContactsCtrl', function () {
    this.contacts = ContactsList;
  });
