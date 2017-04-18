(function() {
	'use strict';
	/**
	 *  Module
	 *
	 * Description
	 */
	angular.module('app.core')
		.filter('ageFilter', function() {

			function calculateAge(birthday) {
				var ageDifMs = Date.now() - birthday.getTime();
				var ageDate = new Date(ageDifMs);
				return Math.abs(ageDate.getUTCFullYear() - 1970);
			}

			function monthDiff(d1, d2) {
				if (d1 < d2) {
					var months = d2.getMonth() - d1.getMonth();
					return months <= 0 ? 0 : months;
				}
				return 0;
			}

			return function(bithDate) {
				bithDate = new Date(bithDate);
				var age = calculateAge(bithDate);
				if (age == 0) {
					return monthDiff(bithDate, new Date()) + ' mois';
				}
				return age;
			}
		});


})();