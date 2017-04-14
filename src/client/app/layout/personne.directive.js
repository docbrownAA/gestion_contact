(function() {
	'use strict';
	angular.module('app.layout')
		.directive('personne', personne);

	/* @ngInject */
	function personne() {
		var directive = {
			bindToController: true,
			restrict: 'EA',
			templateUrl: 'app/layout/personne.html'
			
		};



		return directive;
	}



})();