(function() {
	'use strict';
	angular.module('app.layout')
		.directive('personneDetail', personneDetail);

	personneDetail.$inject = ['personneservice', 'logger'];

	/* @ngInject */
	function personneDetail(personneservice, logger) {
		var directive = {
			scope: {
				personne: '=detPersonne',
				updateList: '&'
			},
			templateUrl: 'app/layout/personne-detail/personne-detail.html',
			restrict: 'EA',
			link: link
		};
		return directive;

		function link(scope) {
			scope.master = scope.personne;

			scope.update = function(personne) {
				personneservice.updatePersonne(personne).then(function(success) {
						logger.success(success);
						scope.updateList();
					},
					function(error) {
						logger.error(error);
					});
			};
			scope.reset = function() {
				scope.personne = angular.copy(scope.master);
			};
			/*scope.save = function(personne) {
				personneservice.savePersonne(personne).then(function(success) {
						logger.success(success);
						scope.updateList();
					},
					function(error) {
						console.log(error);
						
					});
			};*/
		}

	}



})();