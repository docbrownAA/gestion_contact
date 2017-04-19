(function() {
	'use strict';
	angular.module('app.layout')
		.directive('personneDetail', personneDetail);

		personneDetail.$inject = ['personneservice'];

	/* @ngInject */
	function personneDetail(personneservice) {
		var directive = {
			scope: {
				personne: '=detPersonne',
				updateList:'&'
			},
			templateUrl: 'app/layout/personne-detail.html',
			restrict: 'EA',
			link: link
		};
		return directive;
		function link(scope) {
			scope.master = scope.personne;

			scope.update = function(personne) {
				personneservice.updatePersonne(personne).then(function(success){

				scope.updateList();
				},
				function(error){

				});
			};
			scope.reset = function(){
				scope.personne = angular.copy(scope.master);
			}
			scope.save = function(personne){
				personneservice.savePersonne(personne).then(function(success){

				scope.updateList();
				},
				function(error){
					
				});;
			}
		}

	}



})();