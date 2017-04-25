(function() {
	'use strict';
	angular.module('app.layout')
		.directive('personneAdresse', personneAdresse);

		personneAdresse.$inject= ['villeservice'];

	function personneAdresse(villeservice) {
		var directive = {
			scope: {
				personne: '=adrPersonne',
			},
			templateUrl: 'app/layout/personne-adresse/personne-adresse.template.html',
			restrict: 'EA',
			link: link
		};
		return directive;



		function link(scope) {
			scope.master = scope.personne;
			scope.adresse = {
				libelle: '',
				ville: null,
				debut: null,
				fin: null,
				principal: false
			};

			function getVilles(){
				villeservice.getVilles().then(function(data){
					scope.villes = data;
				});
			}
			getVilles();
		}
	}
})();