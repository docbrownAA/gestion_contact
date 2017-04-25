(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger', 'personneservice', '$filter','$uibModal','$document'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger, personneservice, $filter,$uibModal,$document) {
    var vm = this;
    vm.news = {
      title: 'gestionContact',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.personnes = [];
    vm.title = 'Dashboard';
    vm.selectPersonne = selectPersonne;
    vm.getPersonnes = getPersonnes;
    vm.deletePersonne = deletePersonne;
    vm.addAdresse = addAdresse;

    vm.animationsEnabled = true;

    

    activate();

    function activate() {
      var promises = [getPersonnes()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getPersonnes() {
      return personneservice.getPersonnes().then(function(data) {
        vm.personnes = data;
        return vm.personnes;
      });
    }

    function getPersonne(id) {
      return personneservice.getPersonne(id).then(function(data) {
        vm.personneSelected = data;
        return vm.personneSelected;
      });
    }

    function selectPersonne(id) {
      getPersonne(id);
    }

    function deletePersonne(id) {
      return personneservice.deletePersonne(id).then(function() {
        vm.getPersonnes();
      });
    }

    function addAdresse(){
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy:'modal-body',
        templateUrl:'app/layout/modal/add-adresse/adresse-modal.template.html',
        controller:'ModalAdresseCtrl',
        conrollerAs:'vm',
        personne:vm.personneSelected

      });
    }
  }
})();