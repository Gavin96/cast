(function() {
  'use strict';

  angular
    .module('forecastAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $scope, $compile, hotRegisterer) {
    // resources initialization
    var vm = this;
    vm.test = 'sldfjlsdjf'
    this.projects = [
      {'title': 'ProjectA', 'id': '1'},
      {'title': 'ProjectB', 'id': '2'},
      {'title': 'ProjectC', 'id': '3'},
      {'title': 'ProjectD', 'id': '4'}
    ]

    var colors = {
      'projectA': 'red',
      'projectB': 'blue',
      'projectC': 'green',
      'projectD': 'orange',
    }

    var headers = ['ID', 'Name', 'Area', 'Tite','Employee ID', moment().startOf('isoWeek').format('YY/MM/DD')]
    for(var i = 1; i < 12; i++) {
      headers.push(moment().add(i, 'weeks').startOf('isoWeek').format('YY/MM/DD'))
    }
    this.pageTitle = ' here is the employee record page';
    this.settings = {
      colHeaders: headers,
      fillHandle: false, //disable drag-down
    }
    // this.date = moment().isoWeek()
    // moment().subtract(1, 'weeks').startOf('isoWeek')
    // this.date = moment().add(1, 'weeks').startOf('isoWeek').format('YYYY/MM/DD')
    this.today = moment().format('YYYY/MM/DD')

    var data = this.data = [
      {
        'id': '1', 'employeeId': '003003xxx0', 'name': 'test1', 'area': 'frontend', 'title': 'Jr.',
        "records": {35: 'projectA', 36: 'projectA', 37: 'projectA', 38: 'projectB', 39: 'projectD', 40: 'projectD', 41: 'projectD', 42: 'projectD', 43: 'projectD', 44: 'projectD', 45:'projectB', 46: 'projectB'}
      },
      {
        'id': '2', 'employeeId': '003003xxx1', 'name': 'test2', 'area': 'backend', 'title': 'Sr.',
        "records": {35: 'projectA', 36: 'projectA', 37: 'projectB', 38: 'projectB', 39: 'projectB', 40: 'projectB', 41: 'projectB', 42: 'projectB', 43: 'projectB', 44: 'projectB', 45:'projectB', 46: 'projectB'}
      },
      {
        'id': '3', 'employeeId': '003003xxx2', 'name': 'test3', 'area': 'frontend', 'title': 'Sr.',
        "records": {35: 'projectA', 36: 'projectA', 37: 'projectA', 38: 'projectB', 39: 'projectD', 40: 'projectD', 41: 'projectD', 42: 'projectD', 43: 'projectD', 44: 'projectD', 45:'projectB', 46: 'projectB' }
      },
      {
        'id': '4', 'employeeId': '003003xxx3', 'name': 'test4', 'area': 'frontend', 'title': 'Jr.',
        "records": {35: 'projectA', 36: 'projectA', 37: 'projectB', 38: 'projectB', 39: 'projectD', 40: 'projectD', 41: 'projectD', 42: 'projectD', 43: 'projectD', 44: 'projectD', 45:'projectB', 46: 'projectB'}
      }

    ]

    this.editRenderer = function(hotInstance, td, row, col, prop, value) {
      // console.log(value);
	  	var el = $compile('<a href="" ng-click="sheet.EditModel(' + row + ')">' + value + '</a>')($scope);
	 			if(!td.firstChild) {
  				td.appendChild(el[0]);
			}
    	return td;
    };

    this.colorRenderer = function(hotInstance, td, row, col, prop, value) {
       Handsontable.renderers.TextRenderer.apply(this, arguments);
      td.style.background = colors[value];
      td.style.color = '#eee'
      return td
    }


    this.EditModel = function() {
      $('#modal-edit-user').modal('show');
      reloadTable();
    }

    this.prettyLook = function(){
      reloadTable();
    }

    function reloadTable(){
      // 35 means the number of first week
      // 46 means the number of last week number
      var mergeCells = [];
      angular.forEach(data, function(employee, index){
        var record = employee.records[35];
        var row = index;
        var col = 5, rowspan =1, colspan =1;
        for(var i = 36; i<=46; i++){
          if (employee.records[i] == record){
            colspan += 1;
            if (i == 46) {
              mergeCells.push({row: row, col: col, rowspan: rowspan, colspan: colspan})
            }
          } else {
            mergeCells.push({row: row, col: col, rowspan: rowspan, colspan: colspan})
            colspan = 1;
            col = 5 + i - 35;
            record = employee.records[i]
          }
        }
      });

      // reload table
      hotRegisterer.getInstance('my-handsontable').updateSettings({
        colHeaders: headers,
        fillHandle: false, //disable drag-down
        mergeCells: mergeCells
      })
    }

  }
})();
