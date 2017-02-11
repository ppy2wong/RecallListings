/*
* Entry point for our AngularJS app, used to search for Recall Alerts from the Government of Canada.
*/
(function() {
	var recallListingsApp = angular.module('RecallListingsApp', ['ngSanitize','ngRoute']);

	recallListingsApp.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/', 
			// List of recent recalls
			{
				templateUrl: 'templates/recentRecalls.html',
				controller: 'RecentAlertsController'
			}
		).
		when('/search', 
			// Search for recalls based on specific criteria
			{
				templateUrl: 'templates/recallSearchResults.html',
				controller: 'SearchAlertsController'
			}
		).
		when('/:id', 
			// Information on specific recall alert
			{
				templateUrl: 'templates/recallDetails.html',
				controller: 'AlertDetailsController'
			}
		)
	});

}());