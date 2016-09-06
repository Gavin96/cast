(function() {
  'use strict';

  angular
    .module('forecastAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/sheets/sheets.html',
        controller: 'SheetsController',
        controllerAs: 'sheets'
      })
      .state('employee', {
        url: '/employee',
        templateUrl: 'app/employee/employee.html',
        controller: 'EmployeeController',
        controllerAs: 'employee'
      })
      .state('project', {
        url: '/project',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'project'
      })
      .state('sample', {
        url: '/sheet_angular',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'sheet'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/adminLogin.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });
    $urlRouterProvider.otherwise('/');
  }

})();
