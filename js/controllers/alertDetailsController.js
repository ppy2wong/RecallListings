/*
* Controller for displaying alert details.
*/
(function() {
	var recallListingsApp = angular.module('RecallListingsApp');

	recallListingsApp.controller('AlertDetailsController', function($scope, $log, $routeParams, recallService) {

		/* Get all recall alerts */
		recallService.getDetailedRecallAlert($routeParams.id).then(
			function(data) {
				$scope.alertDetails = data.data;
			},
			function(reason) {
				$log.error(reason);
			}
		);
	});
}());