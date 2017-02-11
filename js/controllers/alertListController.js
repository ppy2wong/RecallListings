/*
* Controller for displaying the 15 most recent alerts from 
* the Canadian Recalls and Safety Alerts API.
*/
(function() {
	var recallListingsApp = angular.module('RecallListingsApp');

	recallListingsApp.controller('RecentAlertsController', function($scope, $log, recallService) {

		/* Control the sort order of the app */
		$scope.sortOrder = "+recallId";

		$scope.setSortOrder = function(sortOrder) {
			$scope.sortOrder = sortOrder;
		}

		/* Get all recall alerts */
		recallService.getAllRecallAlerts().then(
			function(data) {
				$scope.alerts = data.data.results.ALL;
			},
			function(reason) {
				$log.error(reason);
			}
		);
	});
}());