(function() {
	'use strict';
	angular.module('app.layout')
		.directive('personneDetail', personneDetail);

	/* @ngInject */
	function personneDetail() {
		var directive = {
			/*controller: personneDetailController,
			controllerAs: 'vm',*/
			restrict: 'EA',
			//bindToController: true,
			templateUrl: 'app/layout/personne-detail.html',
			scope: {
				personne: '=detPersonne'
			},
			link:link
			//translude: true

		};

		return directive;
		//link.$inject = ['personneservice'];

		function link(personneservice,scope) {
			scope.update = function(personne) {
				console.log('coucou');
				personneservice.updatePersonne(personne);
			}
		}

	}



})();