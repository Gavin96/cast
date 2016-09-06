(function() {
  'use strict';
  angular
    .module('forecastAngular')
    .filter('trim', function () {
      return function(value) {
        if(!angular.isString(value)) {
          return value;
        }
        return value.replace(/^\s+|\s+$/g, ''); //IE>=9
      };
    })
    .controller('SheetsController', SheetsController);

  /** @ngInject */
  function SheetsController($timeout, toastr, $scope, $compile, hotRegisterer, dataFactory) {
    var vm = this,
        today = new Date(),
        hotSettings = dataFactory.hotSettings;

    vm.pageTitle = 'Forecast MVP';
    vm.version = '0.1.0';
    vm.date = today;
    vm.settings = hotSettings;
    vm.projects = dataFactory.getAllProjects();
    vm.isCreate = false;
    vm.coords = {row: 0, col: 0};


    vm.addUser = function() {
      vm.isCreate = true;
      vm.user = {
        project: 'On Bench',
        from: today,
        to: today
      };
      $('#modal-user').modal('show');
    };

    $scope.$on('editUserEvent', function(event, args) {
      vm.isCreate = false;
      vm.coords = args.coords;
      vm.user = $.extend({}, args.user, {
        project: args.user.w0,
        from: today,
        to: today
      });
    });

    vm.saveHandler = function() {
      // console.log(vm.isCreate);
      // console.log(vm.user);
      // console.log(hotSettings.data);
      //TODO call API here to save
      // call service here
      if (vm.isCreate) {
        vm.user.id = hotSettings.data.length + 1;
        for(var i = 0, count = 8; i < count; i++) {
          vm.user['w' + i] = vm.user.project.trim();
        }
        hotSettings.data.push(vm.user);
      } else {
        // update table
        $.extend(hotSettings.data[vm.coords.row], vm.user);
      }
      hotRegisterer.getInstance('sheets-grid').updateSettings({
        data: hotSettings.data
      });
      $('#modal-user').modal('hide');
    };
  }
})();
