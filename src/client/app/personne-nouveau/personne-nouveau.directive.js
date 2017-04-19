(function() {
	'use strict';
	angular.module('app')
		.controller('personneNouveauController', personneNouveauController);

	personneNouveauController.$inject = ['Personne', '$location'];

	function personneNouveauController(Personne, $location) {
		var vm = this;
		vm.reset = reset;
		vm.cancel = cancel;
		vm.save = save;
		vm.gotoStep = gotoStep;
		vm.getStepTemplate = getStepTemplate;

		vm.personneMaster = {
			nom: "entrez le nom",
			prenom: "entrez le prenom",
			date_naissance: ""
		};
		vm.currentStep=1;
		vm.steps = [
			{
				step:1,
				name:"Personne",
				path:'app/personne-nouveau/personne/personne.template.html'
			},
			{
				step:2,
				name:"Adresse",
				path:'app/personne-nouveau/adresse/adresse.template.html'
			}
		];		

		function reset() {
			vm.personne = angular.copy(vm.personneMaster);
		}

		function cancel() {
			$location.path('/personnes');
		}

		function save() {
			console.log(vm.personne);
			/*return Personne.savePersonne(vm.personne)
				.then(function(response) {
						$location.path('/personnes')
						console.log(response);
					},
					function(error) {
						console.log(error);
					});*/


		}
		function gotoStep (newStep){
			vm.currentStep = newStep;
		}

		function getStepTemplate(){
			for (var i = vm.steps.length - 1; i >= 0; i--) {
				if(vm.steps[i].step == vm.currentStep){
					return vm.steps[i].path;
				}
			}
		}

		reset();



	}
})();