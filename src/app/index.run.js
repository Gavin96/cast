(function() {
  'use strict';

  angular
    .module('forecastAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
