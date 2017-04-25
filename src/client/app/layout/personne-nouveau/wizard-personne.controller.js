(function() {
	'use strict';
	angular.module('app.layout')
		.controller('WizardPersonneCtrl', WizardPersonneCtrl);

	WizardPersonneCtrl.$inject = ['personneservice', 'villeservice'];

	function WizardPersonneCtrl(personneservice, villeservice) {
		var vm = this;
		vm.steps = [{
			templateUrl: 'app/layout/personne-nouveau/personne-step.html',
			hasForm: true
		}, {
			templateUrl: 'app/layout/personne-nouveau/adresse-step.html',
			hasForm: true
		}];

		vm.bottom =[
			{
				templateUrl:'app/layout/personne-nouveau/bottom-step.html'
			}
		];

		vm.getVilles = getVilles;
		vm.save = save;
		vm.reset = reset;

		vm.personne = {
			nom: '',
			prenom: '',
			dateNaissance: null,
			personneDetail: {
				sexe: '',
				numSecu: ''
			},
			personnesAdresses: []
		};
		vm.adresse = {};
		vm.personneadresse = {};


		function getVilles() {
			villeservice.getVilles().then(function(data) {
				vm.villes = data;
			});
		}

		function save() {
			villeservice.getVille(vm.villeId).then(function(dataVille) {
				vm.adresse.ville = dataVille;
				vm.personneadresse.adresse = vm.adresse;
				vm.personne.personnesAdresses = [];
				vm.personne.personnesAdresses.push(vm.personneadresse);

				personneservice.savePersonne(vm.personne).then(function(data) {

				});
			});
		}

		function reset(){
			vm.personne = {
			nom: '',
			prenom: '',
			dateNaissance: null,
			personneDetail: {
				sexe: '',
				numSecu: ''
			},
			personnesAdresses: []
		};
		vm.adresse = {};
		vm.personneadresse = {};
		}
		vm.reset();
		vm.getVilles();

	}
})();