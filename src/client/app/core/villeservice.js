(function(){
	'use strict';

	angular.module('app.core')
	.factory('villeservice',villeservice);

	villeservice.$inject = ['$http', '$q', 'exception', 'logger'];

	function villeservice($http,$q,exception, logger){
		var urlBase = 'http://localhost:8088/villes';
		var service = {
			getVilles: getVilles,
			getVille : getVille
		};

		return service;

		function getVilles(){
			return $http.get(urlBase).then(success).catch(fail);

			function success(response){
				return response.data;
			}
			function fail(e){
				return exception.catcher('XHR Failed for getVilles')(e);
			}
		}

		function getVille(id){
			return $http.get(urlBase+'/'+id).then(success).catch(fail);

			function success(response){
				return response.data;
			}

			function fail(e){
				return exception.catcher('XHR Failed for getVille:'+id)(e);
			}
		}
	}

})();