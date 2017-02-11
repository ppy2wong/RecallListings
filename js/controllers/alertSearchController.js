/*
* Controller for displaying 20 alerts based on a specific keyword.
*/
(function() {
	var recallListingsApp = angular.module('RecallListingsApp');

	recallListingsApp.controller('SearchAlertsController', function($scope, $log, recallService) {

		/* Control the sort order of the app */
		$scope.sortOrder = "+recallId";

		$scope.searchOpened = false;

		$scope.setSortOrder = function(sortOrder) {
			$scope.sortOrder = sortOrder;
		}

		/* Look for alerts */
		$scope.searchAlerts = function() {
			$scope.searchOpened = true;

			recallService.getRecallAlertsForKeyword($scope.keyword).then(
				function(data) {
					$scope.alertResults = data.data.results;
				},
				function(reason) {
					$log.error(reason);
				}
			);
		}
	});
}());