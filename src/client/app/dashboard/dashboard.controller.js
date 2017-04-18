(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger', 'personneservice','$filter'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger, personneservice,$filter) {
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

    activate();

    function activate() {
      var promises = [getMessageCount(), getPersonnes()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }

    function getPersonnes() {
      return personneservice.getPersonnes().then(function(data) {
        vm.personnes = data;
        return vm.personnes;
      });
    }

    function getPersonne(id){
      return personneservice.getPersonne(id).then(function(data){
        vm.personneSelected = data;
        return vm.personneSelected;
      })
    }
    function selectPersonne(id){
      getPersonne(id);
    }
  }
})();