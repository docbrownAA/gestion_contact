(function(){
	'use strict';
	angular.module('app.layout')
	.controller('ModalAdresseCtrl',ModalAdresseCtrl);

	ModalAdresseCtrl.$inject = ['$uibModalInstance','personneservice']

	function ModalAdresseCtrl($uibModalInstance,personneservice,personne){
		var vm = this;
		vm.personne = personne;

	}
})();