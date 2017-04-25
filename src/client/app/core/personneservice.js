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
			deletePersonne: deletePersonne,
			updatePersonne: updatePersonne
		};

		function getPersonnes() {
			return $http.get(urlBase + '/personnes').then(success).catch(fail);

			function success(response) {
				for (var i = 0; i < response.data.length; i++) {
					response.data[i].dateNaissance = new Date(response.data[i].dateNaissance);
				}
				return response.data;
			}

			function fail(e) {
				return exception.catcher('XHR Failed for getPeople')(e);
			}
		}

		function getPersonne(id) {

			return $http.get(urlBase + '/personnes/' + id).then(success).catch(fail);

			function success(response) {
				response.data.dateNaissance = new Date(response.data.dateNaissance);
				return response.data;
			}

			function fail(e) {
				return exception.catcher('XHR Failed for getPersonnes(' + id + ')')(e);
			}

		}

		function savePersonne(personne) {
			return $http.post(urlBase + 'personnes', personne).then(success).catch(fail);

			function success(response) {
				console.log(response);
				return response.data;
			}

			function fail(e) {
				return exception.catcher('XHR Failed for getPersonnes(' + personne.id + ')')(e);
			}
		}

		function updatePersonne(personne) {
			console.log(personne);

			return $http.put(urlBase + 'personnes/'+personne.id,personne).then(success).catch(fail);

			function success(response){
				return response;
			}

			function fail(e){
				return exception.catcher('XHR Failed for updatePersonne(' + personne.id + ')')(e);
			}

		}

		function deletePersonne(idPersonne) {

			return $http.delete(urlBase+'personnes/personne/'+idPersonne).then(success).catch(fail);

			function success(response){
				console.log(response);
			}

			function fail(e){
				return exception.catcher('XHR Failed for deletePersonne(' + idPersonne + ')')(e);
			}
		}
		return service;
	}
})();