(function() {
	'use strict';
	angular.module('app.core')
		.factory('personneservice', personneservice);
	personneservice.$inject = ['$http', '$q', 'exception', 'logger'];

	function personneservice($http, $q, exception, logger) {
		var urlBase = 'http://localhost:8088/';
		var service = {
			getPersonnes: getPersonnes,
			getPersonne: getPersonne,
			savePersonne: savePersonne,
			deletePersonne: deletePersonne
		};

		function getPersonnes() {
			return $http.get(urlBase+'/personnes').then(success).catch(fail);
			function success(response){
				return response.data;
			}
			function fail(e){
				return exception.catcher('XHR Failed for getPeople')(e);
			}
		};

		function getPersonne(id) {

			return $http.get(urlBase+'/personnes/'+id).then(success).catch(fail);
			function success(response){
				return response.data;
			}
			function fail(e){
				return exception.catcher('XHR Failed for getPersonnes('+id+')')(e);
			}

		};

		function savePersonne(personne) {
			return $http({
				method: 'POST',
				data: personne,
				url: urlBase + 'personnes'
			}).success(function(response) {
				console.log(response);
			}).error(function(response) {
				console.log(response);
			});
		};

		function deletePersonne(idPersonne){
			return $http({
				method: 'DELETE',
				data: idPersonne,
				url: urlBase + 'personnes/personne/' + idPersonne
			}).success(function(response) {
				console.log(response);
			}).error(function(response) {
				console.log(response);
			});
		}


		return service;
	}
})();