(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize','multiStepForm',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router', 'ngplus', 'ui.bootstrap'
    ]);
})();
