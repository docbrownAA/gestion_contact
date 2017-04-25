(function(){
	'use strict';
	angular.module('app.core')
	.factory('personneAdresseService',personneAdresseService);

	personneAdresseService.$inject = ['$http','logger','exception'];

	function personneAdresseService($http,logger,exception){
		var urlBase = 'http://localhost:8088/personneadresse';
		var service = {
			save:save
		};

		function save(personneadresse){
			return $http.post(urlBase,personneadresse).then(success).catch(fail);

			function success(response){
				return response.data;
			}

			function fail(e){
				return exception.catcher('XHR Failed for save personneadresse:')(e);
			}
		}

		return service;
	}
})();