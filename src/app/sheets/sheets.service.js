(function() {
  'use strict'
  angular.module('forecastAngular').factory('dataFactory', ['$rootScope', function($rootScope) {
    //mocked data begin
    var targetRowNum = 0;
    var projectNames = ["projectA", "projectB", "projectC", "projectD", "projectE", "projectF", "projectG", "projectH", "projectI", "projectJ"];
    var colHeaders = [
      'ID',
      'Name',
      'Area',
      'Title',
      'Action'
    ];

    //expected data for sheets
    //TODO need to parse all data(from service) to this format
    var dataObject = [
        {id: 1, name: 'Tony', area: 'Java', title: 'TL', w0: "projectA", w1: "projectA", w2: "projectB", w3: "projectA", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 2, name: 'John', area: 'Web', title: 'SD', w0: "On Bench", w1: "projectG", w2: "projectG", w3: "projectG", w4: "projectG", w5: "projectG", w6: "projectG", w7: "projectG"},
        {id: 3, name: 'Lily', area: 'Java', title: 'D', w0: "projectE", w1: "projectE", w2: "projectE", w3: "projectE", w4: "projectE", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 4, name: 'Lilei', area: 'Web', title: 'D',	w0: "On Bench", w1: "projectA", w2: "projectA", w3: "projectA", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 5, name: 'Hanmei', area: 'Web', title: 'D',	w0: "projectD", w1: "projectD", w2: "projectD", w3: "projectB", w4: "projectB", w5: "projectB", w6: "projectB", w7: "projectB"},
        {id: 6, name: 'Jim', area: 'QA', title: 'A',	w0: "projectA", w1: "projectA", w2: "projectA", w3: "projectA", w4: "projectD", w5: "projectD", w6: "projectD", w7: "projectD"},
        {id: 7, name: 'Berton', area: 'Web', title: 'STL',	w0: "projectE", w1: "projectE", w2: "projectE", w3: "projectE", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 8, name: 'Samel', area: 'JavaScript', title: 'AD',	w0: "On Bench", w1: "projectA", w2: "projectA", w3: "projectA", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 9, name: 'Leifeng', area: 'Web', title: 'SD',	w0: "On Bench", w1: "projectA", w2: "projectA", w3: "projectA", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 10, name: 'Bill', area: 'Android', title: 'D',	w0: "projectH", w1: "projectH", w2: "projectH", w3: "projectH", w4: "projectH", w5: "projectH", w6: "projectH", w7: "projectH"},
        {id: 11, name: 'Howard', area: 'Web', title: 'D',	w0: "projectC", w1: "projectC", w2: "projectC", w3: "projectC", w4: "projectC", w5: "projectC", w6: "projectC", w7: "projectC"},
        {id: 12, name: 'Johnny', area: 'HTML5', title: 'D',	w0: "projectF", w1: "projectF", w2: "projectF", w3: "projectF", w4: "projectF", w5: "projectF", w6: "projectF", w7: "projectF"},
        {id: 13, name: 'Hannah', area: 'Web', title: 'D',	w0: "projectG", w1: "projectG", w2: "projectG", w3: "projectG", w4: "projectG", w5: "projectG", w6: "projectG", w7: "projectG"},
        {id: 14, name: 'Vicky', area: 'IOS', title: 'D',	w0: "On Bench", w1: "On Bench", w2: "On Bench", w3: "On Bench", w4: "On Bench", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 15, name: 'Frankin', area: 'Web', title: 'D',	w0: "On Bench", w1: "projectJ", w2: "projectJ", w3: "projectJ", w4: "projectJ", w5: "projectJ", w6: "projectJ", w7: "projectJ"},
        {id: 16, name: 'Rich', area: 'C++', title: 'D',	w0: "On Bench", w1: "On Bench", w2: "On Bench", w3: "On Bench", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 17, name: 'Jeff', area: 'Web', title: 'D',	w0: "On Bench", w1: "On Bench", w2: "On Bench", w3: "On Bench", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 18, name: 'Angel', area: 'Web', title: 'D',	w0: "On Bench", w1: "On Bench", w2: "On Bench", w3: "projectA", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 19, name: 'Sherry', area: 'C', title: 'D',	w0: "On Bench", w1: "On Bench", w2: "projectA", w3: "projectA", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 20, name: 'Tina', area: 'Web', title: 'D',	w0: "On Bench", w1: "On Bench", w2: "On Bench", w3: "projectA", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 21, name: 'Rodney', area: 'Web', title: 'Intern',	w0: "On Bench", w1: "On Bench", w2: "On Bench", w3: "On Bench", w4: "projectA", w5: "projectA", w6: "projectA", w7: "projectA"},
        {id: 22, name: 'Patrick', area: 'PHP', title: 'SD',	w0: "On Bench", w1: "projectA", w2: "On Bench", w3: "On Bench", w4: "On Bench", w5: "projectA", w6: "projectA", w7: "projectA"}
      ];

    // maps function to lookup string
    Handsontable.renderers.registerRenderer('negativeValueRenderer', negativeValueRenderer);
    Handsontable.hooks.add('afterOnCellMouseDown', function(event, coords, td) {
      if (coords.col === CONSTANT_VARS.INDEX_OF_ACTION_COLUMN) {
        targetRowNum = coords.row;
        var userItem = dataObject[targetRowNum];
        $rootScope.$broadcast('editUserEvent', {user: userItem, coords: coords});
        $rootScope.$apply();
        $('#modal-user').modal('show');
      }
    });

    var columns = [{
      data: 'id',
      type: 'numeric',
      width: 40
    }, {
      data: 'name'
    }, {
      data: 'area',
      type: 'text'
    }, {
      data: 'title',
      type: 'text'
    }, {
      data: 'action',
      renderer: customActionRender
    }, {
      data: 'w0',
      editor: 'dropdown',
      source: projectNames
    }, {
      data: 'w1',
      editor: 'dropdown',
      source: projectNames
    }, {
      data: 'w2',
      editor: 'dropdown',
      source: projectNames
    }, {
      data: 'w3',
      editor: 'dropdown',
      source: projectNames
    }, {
      data: 'w4',
      editor: 'dropdown',
      source: projectNames
    }, {
      data: 'w5',
      editor: 'dropdown',
      source: projectNames
    }, {
      data: 'w6',
      editor: 'dropdown',
      source: projectNames
    }, {
      data: 'w7',
      editor: 'dropdown',
      source: projectNames
    }];

    // var hotElementContainer = hotElement.parentNode;
    // var hotElement = document.querySelector('#hot');
    var hotSettings = {
      data: dataObject,
      columns: columns,
      stretchH: 'all',
      // width: 800,
      autoWrapRow: true,
      // height: 400,
      // maxRows: 22,
      // maxCols: 12,
      rowHeaders: false,
      colHeaders: colHeaders.concat(getLastMondays(CONSTANT_VARS["WEEKS_COUNT"])),
      columnSorting: true,
      sortIndicator: true,
      autoColumnSize: {
        samplingRatio: 23
      },
      cells: function(row, col, prop) {
        var cellProperties = {};

        if (row === 0 || this.instance.getData()[row][col] === 'readOnly') {
          // make 1st row read-only
          // cellProperties.readOnly = true;
        }
        if (col === 0 || col === CONSTANT_VARS.INDEX_OF_ACTION_COLUMN) {
          cellProperties.readOnly = true;
        } else if (col > CONSTANT_VARS.INDEX_OF_ACTION_COLUMN) {
          //render with colors from 1st week
          cellProperties.renderer = rowRender;
        } else {
          // uses lookup map
          cellProperties.renderer = "negativeValueRenderer";
        }

        return cellProperties;
      }
      // ,mergeCells: generatedMergedCells()
    };

    return {
      hotSettings: hotSettings,
      getAllProjects: function() {
        var defaultValue = CONSTANT_VARS["ON_BENCH"];
        if (-1 === $.inArray(defaultValue, projectNames)) {
          projectNames.unshift(defaultValue);
        }
        return projectNames;
      }
    };
  }]);

  var CONSTANT_VARS = {
    DAYS_PER_WEEK: 7,
    ON_BENCH: "On Bench",
    WEEKS_COUNT: 18,
    INDEX_OF_ACTION_COLUMN: 4
  };

  var colorList = [
    "#FFFFFF",
    "#90EE90",
    "#FFA07A",
    "#87CEFA",
    "#5CB85C",
    "#5BC0DE",
    "#FFFF00",
    "#DFF0D8",
    "#E0FFFF",
    "#337AD4",
    "#F0AD4E"
  ];

  var projectColorMap = {
    "On Bench": colorList[0],
    "projectA": colorList[1],
    "projectB": colorList[2],
    "projectC": colorList[3],
    "projectD": colorList[4],
    "projectE": colorList[5],
    "projectF": colorList[6],
    "projectG": colorList[7],
    "projectH": colorList[8],
    "projectI": colorList[9],
    "projectJ": colorList[10]
  };

  //mocked data end


  function generatedMergedCells() {
    //TODO make a util fuction to generate this setting base on the real data

    return [
      {row: 0, col: 5, rowspan: 1, colspan: 2},
      {row: 0, col: 8, rowspan: 1, colspan: 5},
      {row: 1, col: 6, rowspan: 1, colspan: 7},
      {row: 2, col: 5, rowspan: 1, colspan: 5},
      {row: 2, col: 10, rowspan: 1, colspan: 3}
    ];
  }

  //get specified coming weeks base on current week
  function getLastMondays(count) {
    var nextMondays = [];
    for (var i = 0; i < count; i++) {
      nextMondays.push(moment().day(1 + CONSTANT_VARS['DAYS_PER_WEEK'] * i).format("M/D"));
    }

    return nextMondays;
  };

  //rendering functions here
  function customActionRender(instance, td, row, col, prop, value, cellProperties) {
    td.innerHTML = '<button type="button" class="btn btn-default" data-toggle="modal" data-target=".modal-user-popup" ng-click="sheets.editUser();"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button>';
    return td;
  }

  function rowRender(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    // td.style.fontWeight = 'bold';
    td.style.color = 'black';
    td.style.background = projectColorMap[value];
  }

  function negativeValueRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);

    // if row contains negative number
    if (parseInt(value, 10) < 0) {
      // add class "negative"
      td.className = 'make-me-red';
    }

    if (!value || value === '') {
      td.style.background = '#EEE';
    } else {
      if (value === CONSTANT_VARS["ON_BENCH"]) {
        td.style.fontStyle = 'italic';
      }
      td.style.background = '';
    }
  }

}());
