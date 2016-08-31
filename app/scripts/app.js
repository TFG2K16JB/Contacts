'use strict';

/**
 * @ngdoc overview
 * @name contactsApp
 * @description
 * # contactsApp
 *
 * Main module of the application.
 */
angular
  .module('contactsApp', [
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl',
        controllerAs: 'new'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'ContactsCtrl',
        controllerAs: 'contacts'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  var ContactsList = [
    {nombre: "Juan", apellido: "Perez", edad: 23, tel: "666 200 100"},
    {nombre: "Silvia", apellido: "Bermejo", edad: 18, tel: "555 800 777"},
    {nombre: "Pedro", apellido: "Pastor", edad: 29, tel: "91 700 20 20"},
  ];
