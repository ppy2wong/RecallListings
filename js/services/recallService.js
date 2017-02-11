/*
* Service for connecting to Recall Alerts from the Government of Canada.
*
* The service will connect to the Canadian Recalls and Safety Alerts API and 
* gather the following information:
* 1) The 15 most recent alerts from the API
* 2) The 20 most recent alerts for a given allergen from the API; and
* 3) Detailed information for a specific alert.
*/
(function() {
	var recallListingsApp = angular.module('RecallListingsApp');

	recallListingsApp.factory('recallService', function($http) {

		/* Endpoint API */
		var recallAPIEndpoint = "http://healthycanadians.gc.ca/recall-alert-rappel-avis/api/";

		/* Service method: get a list of recalls */
		var serviceGetAllRecallAlerts = function() {
			return $http.get(recallAPIEndpoint + "recent/en");
		};

		/* Service method: search for a list of recalls */
		var serviceGetRecallAlertsForKeyword = function(keyword) {
			return $http.get(recallAPIEndpoint + "/search?search=" + keyword + "&lim=20");
		};

		/* Service method: get a detailed recall report for a specific alert */
		var serviceGetDetailedRecallAlert = function(id) {
			return $http.get(recallAPIEndpoint + "/" + id + "/en");
		};

		/* Expose the service methods */
		return {
			getAllRecallAlerts : serviceGetAllRecallAlerts,
			getRecallAlertsForKeyword: serviceGetRecallAlertsForKeyword,
			getDetailedRecallAlert : serviceGetDetailedRecallAlert
		};
	});
}());